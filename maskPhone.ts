export function maskPhone(phone: string): string {
  if (phone.length < 10) return phone;
  
  const start = phone.slice(0, 3);
  const end = phone.slice(-3);
  const masked = '*'.repeat(phone.length - 6);
  
  return `${start}${masked}${end}`;
}
