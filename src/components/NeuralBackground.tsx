import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function NeuralBackground() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const isMobile = window.innerWidth < 768
    const COUNT = isMobile ? 45 : 90
    const MAX_DIST = 1.6

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const positions = new Float32Array(COUNT * 3)
    const velocities: THREE.Vector3[] = []
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.006,
        ),
      )
    }

    const pointGeo = new THREE.BufferGeometry()
    pointGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pointMat = new THREE.PointsMaterial({ color: 0x38bdf8, size: 0.08 })
    const points = new THREE.Points(pointGeo, pointMat)

    const linePositions = new Float32Array(COUNT * COUNT * 6)
    const lineGeo = new THREE.BufferGeometry()
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeo.setDrawRange(0, 0)
    const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25 })
    const lines = new THREE.LineSegments(lineGeo, lineMat)

    const group = new THREE.Group()
    group.add(points, lines)
    scene.add(group)

    const mouse = { x: 0, y: 0 }
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3] += velocities[i].x
        positions[i * 3 + 1] += velocities[i].y
        positions[i * 3 + 2] += velocities[i].z
        if (Math.abs(positions[i * 3]) > 5) velocities[i].x *= -1
        if (Math.abs(positions[i * 3 + 1]) > 3) velocities[i].y *= -1
        if (Math.abs(positions[i * 3 + 2]) > 2) velocities[i].z *= -1
      }

      let n = 0
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          const dx = positions[i * 3] - positions[j * 3]
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
          if (Math.sqrt(dx * dx + dy * dy + dz * dz) < MAX_DIST) {
            linePositions[n * 6] = positions[i * 3]
            linePositions[n * 6 + 1] = positions[i * 3 + 1]
            linePositions[n * 6 + 2] = positions[i * 3 + 2]
            linePositions[n * 6 + 3] = positions[j * 3]
            linePositions[n * 6 + 4] = positions[j * 3 + 1]
            linePositions[n * 6 + 5] = positions[j * 3 + 2]
            n++
          }
        }
      }
      lineGeo.setDrawRange(0, n * 2)
      lineGeo.attributes.position.needsUpdate = true
      pointGeo.attributes.position.needsUpdate = true

      group.rotation.y += (mouse.x * 0.3 - group.rotation.y) * 0.05
      group.rotation.x += (mouse.y * 0.2 - group.rotation.x) * 0.05

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      pointGeo.dispose()
      pointMat.dispose()
      lineGeo.dispose()
      lineMat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="h-full w-full" />
}

export default NeuralBackground