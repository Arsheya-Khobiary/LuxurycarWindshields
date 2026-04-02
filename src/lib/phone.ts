/** E.164 e.g. +447868000226 */
export function formatUkMobileNational(e164: string): string {
  const d = e164.replace(/\D/g, '');
  if (d.startsWith('44') && d.length >= 12) {
    const rest = d.slice(2);
    if (rest.startsWith('7') && rest.length === 10) {
      return `0${rest.slice(0, 4)} ${rest.slice(4, 7)} ${rest.slice(7)}`;
    }
  }
  if (d.startsWith('07') && d.length === 11) {
    return `${d.slice(0, 5)} ${d.slice(5, 8)} ${d.slice(8)}`;
  }
  return e164;
}

export function whatsappDigits(e164: string): string {
  return e164.replace(/\D/g, '').replace(/^0/, '44');
}

export function smsHref(e164: string, body: string): string {
  const digits = e164.replace(/\D/g, '');
  const intl = digits.startsWith('44') ? `+${digits}` : digits.startsWith('0') ? `+44${digits.slice(1)}` : `+${digits}`;
  return `sms:${intl}?body=${encodeURIComponent(body)}`;
}
