export default function getFormattedDate(dateString: string): string {
  // return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'America/New_York' }).format(new Date(dateString))
  return new Date(dateString.replace(/-/g, '\/')).toLocaleString('en-US', {month: 'short', day: '2-digit', year: 'numeric', timeZone: 'America/New_York'});
}