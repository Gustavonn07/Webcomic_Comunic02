'use client'

import Balloon from '@/components/Balloon'
import { VariantTypes } from '@/types/BalloonVariants'

export default function Chapter1Page() {

  return (
    <div className="relative inline-block select-none">
      <Balloon variant={VariantTypes.WAVE} />
      <Balloon variant={VariantTypes.WALK} />
      <Balloon variant={VariantTypes.SCREAM} />
    </div>
  )
}
