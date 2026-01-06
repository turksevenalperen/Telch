import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
          borderRadius: '22px',
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120">
          <path d="M30 75L60 35L90 75" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="60" cy="90" r="8" fill="white"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
