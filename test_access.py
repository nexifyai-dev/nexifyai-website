import urllib.request
import ssl

url = "https://website-phi-vert-79.vercel.app"
ctx = ssl.create_default_context()
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    resp = urllib.request.urlopen(req, context=ctx, timeout=15)
    status = resp.status
    body = resp.read()[:500].decode('utf-8', errors='replace')
    print(f"STATUS: {status}")
    print(f"BODY: {body}")
except urllib.error.HTTPError as e:
    print(f"HTTP_ERROR: {e.code}")
    body = e.read()[:500].decode('utf-8', errors='replace')
    print(f"BODY: {body}")
except Exception as e:
    print(f"ERROR: {e}")
