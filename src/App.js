import './App.css';

import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({MeshLineGeometry, MeshLineMaterial})

export default function App() {
  return (
      <Canvas>
        <Physics>

        </Physics>
      </Canvas>
  )
}

function Band() {
  const band = useRef()
  const fixed = useRef()
  const j1 = useRef()
  const j2 = useRef()
  const j3 = useRef()

  // Canvas size
  const {width, height} = useThree((state) => state.size)

  // A Catmull-Rom curve
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
  ]))
}
