import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  // Validate that data can serialize cleanly to JSON
  let jsonString = '';
  try {
    jsonString = JSON.stringify(data);
  } catch (err) {
    console.error('Invalid JSON-LD payload', err);
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
