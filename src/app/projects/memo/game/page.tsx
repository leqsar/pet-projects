'use client'
import styles from '@/app/projects/memo/game/page.module.css'
import { useRouter } from 'next/router'

export default function Game() {
  const router = useRouter();

  const { theme, playersNumber, gridSize } = router.query;

  console.log(theme, playersNumber, gridSize)
}