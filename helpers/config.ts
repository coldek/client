const dev = process.env.NODE_ENV !== 'production'
// const dev = true

export const server = dev ? `http://localhost:8000` : process.env.NEXT_PUBLIC_API_SERVER

// /avatars/headshots/[cache].png /avatars/body/[cache].png
export const imageServer = dev ? `http://localhost:8000/images` : process.env.NEXT_PUBLIC_IMAGE_SERVER

export const jwtPub = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA4eJzG5QY3ia4rZh7PeeD
grb7iyNVegEtAap3cjMchWbnQFDGlqrtfT4+jOCgkKxben9CQNGNhBZjxqupIl6y
AA+3b37PeFM8nOdOnYQtPL5I91Xtx9xqv/V32GsGZzulYPGknJlLDq506dr39JHq
ZUeYyWJgg7cOFweU/40JWXfiviY3KUMyHEkIMrun9jd3h15q4iMzlSODokd75JFO
tolZ/ylJgJ837+r8OqPuPj6wCCzuQoCj0sfa83KktHXRmbAeLnAor4JlwILESsDl
bvgE0mvO3Smk95XrH/xGZc9PI6lq3HbyLAQ1X4HXF+1pGPllnWpXcJzw/EU2Kjyg
zgyn4tEFsYcASlxsGlhTnRhcAOMRsGjLLXfncpn8S6s8e+DAXSSwELRir20c9naU
xwjfUFHKnnZiYSJO7WHNeWrtclOsToO3UtiuZRVGWyrATL+Zjmi3uiwwFg/k/Nf1
a3tYksffJ0fL7aDS0vPH9WSg+6ZSqRGameR8R0Hkh3kBSDYAZ5t9cI1XOvJPzkx4
3UQoV5PYcAv0eAW13sQPauBkhbmlwvUesTrNErwHVcqHTSxBjBO/ScoWCHdqLIas
A6BF69tDPp1TXtgzrwiBUxMFHytPDnJUQ2jZewGLUEt09ljoTsIbTrfKrv9zb+5L
3BnJMfx1zh21cKycsB3vaDcCAwEAAQ==
-----END PUBLIC KEY-----`