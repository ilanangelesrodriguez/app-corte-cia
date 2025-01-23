"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const BubbleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const bubbles: { x: number; y: number; radius: number; speed: number }[] = []

    for (let i = 0; i < 50; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    function animate() {
      if (ctx) {
        if (canvas) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
      }

      bubbles.forEach((bubble) => {
        if (ctx) {
          ctx.beginPath()
          ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
          ctx.fill()
        }

        bubble.y -= bubble.speed
        if (bubble.y + bubble.radius < 0 && canvas) {
          bubble.y = canvas.height + bubble.radius
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

return <canvas ref={canvasRef} className="absolute inset-0 z-0 max-w-[90vw]" />
}

export default BubbleBackground

