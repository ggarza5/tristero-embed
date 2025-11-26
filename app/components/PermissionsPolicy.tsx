'use client';

import { useEffect } from 'react';

export default function PermissionsPolicy() {
  useEffect(() => {
    const widgetUrl = process.env.NEXT_PUBLIC_WIDGET_URL || 'https://app.mach.exchange/embed?chains=1,10,143,56,43114&showBranding=true&hideAIInput=true&logoUrl=https://upload.wikimedia.org/wikipedia/commons/3/3d/Injective_l.png';
    const iframeOrigin = new URL(widgetUrl).origin;

    // Remove existing meta tag if present
    const existingMeta = document.querySelector('meta[http-equiv="permissions-policy"]');
    if (existingMeta) {
      existingMeta.remove();
    }

    // Create and add the permissions policy meta tag
    const meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'permissions-policy');
    meta.setAttribute('content', `publickey-credentials-create=(self '${iframeOrigin}'), publickey-credentials-get=(self '${iframeOrigin}')`);
    document.head.appendChild(meta);

    // Cleanup function
    return () => {
      const metaToRemove = document.querySelector('meta[http-equiv="permissions-policy"]');
      if (metaToRemove) {
        metaToRemove.remove();
      }
    };
  }, []);

  return null;
}

