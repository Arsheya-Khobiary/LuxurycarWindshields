import { glassLabelById } from '../data/ukCarGlass';

export interface QuoteFormPayload {
  name: string;
  phone: string;
  registration: string;
  glassId: string;
}

export function buildQuoteWhatsAppMessage(payload: QuoteFormPayload): string {
  const glass = glassLabelById(payload.glassId);
  const lines = [
    '🚗 *Quote request* — VIP Windscreens (mobile, London)',
    '',
    `*Name:* ${payload.name.trim()}`,
    `*Phone:* ${payload.phone.trim()}`,
    `*Vehicle registration:* ${payload.registration.trim().toUpperCase()}`,
    `*Glass required:* ${glass}`,
    '',
    '_Sent from website — please reply with your quote._',
  ];
  return lines.join('\n');
}
