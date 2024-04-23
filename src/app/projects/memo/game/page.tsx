'use client'
import styles from '@/app/projects/memo/game/page.module.css'
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'

export default function Game() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(searchParams.get('theme'))
    console.log(searchParams.get('playersNumber'))
    console.log(searchParams.get('gridSize'))
  }, [searchParams]);
}