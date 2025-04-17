export const config = { runtime: 'edge' };

interface VercelGeo { country?: string }
interface GeoRequest extends Request { geo?: VercelGeo }

export default async function middleware(request: GeoRequest) {
  // Vercel injects geo info on edge
  const country = request?.geo?.country ?? '';

  // Redirect ES or PT visitors to /construccio.html
  if (country === 'ES' || country === 'PT') {
    const url = new URL('/construccio.html', request.url);
    return Response.redirect(url, 302);
  }

  // Otherwise continue normal handling
  return fetch(request);
}