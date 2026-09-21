"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

type CookieConsent = "accepted" | "rejected";

const CONSENT_STORAGE_KEY = "mycelium-cookie-consent";
const CONSENT_CHANGE_EVENT = "mycelium-cookie-consent-change";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (!GA_MEASUREMENT_ID || document.querySelector("[data-mycelium-ga]")) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.dataset.myceliumGa = "true";
  document.head.appendChild(script);
}

function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") {
    return null;
  }

  const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return savedConsent === "accepted" || savedConsent === "rejected"
    ? savedConsent
    : null;
}

function subscribeToConsentChange(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

function saveConsent(nextConsent: CookieConsent) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

export function CookieConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeToConsentChange,
    getStoredConsent,
    () => null,
  );

  useEffect(() => {
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, [consent]);

  function handleConsent(nextConsent: CookieConsent) {
    saveConsent(nextConsent);
  }

  if (consent !== null) {
    return null;
  }

  return (
    <section
      aria-label="Cookies e privacidade"
      className="border-b border-border bg-card text-card-foreground shadow-sm"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-foreground">
            Cookies e Privacidade
          </h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Usamos cookies para melhorar sua experiência e análises de acordo
            com a LGPD e o GDPR. Você pode aceitar ou rejeitar.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="outline"
            onClick={() => handleConsent("rejected")}
          >
            Rejeitar
          </Button>
          <Button type="button" onClick={() => handleConsent("accepted")}>
            Aceitar
          </Button>
        </div>
      </div>
    </section>
  );
}
