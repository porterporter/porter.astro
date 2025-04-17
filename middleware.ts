import { geolocation, rewrite } from '@vercel/functions';
 
export default function middleware(request: Request) {
  const { country = '' } = geolocation(request);
  
  if (['PT', 'ES'].includes(country)) {
    return rewrite(new URL('/construccio.html', request.url));
  } 
}