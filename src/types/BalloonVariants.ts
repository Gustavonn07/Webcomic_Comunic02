export const VariantTypes = {
  WAVE: 'Acenar',
  WALK: 'Andar',
  SCREAM: 'Gritar',
} as const

export type VariantType = typeof VariantTypes[keyof typeof VariantTypes]

export const SourceTypes = {
  DEFAULT: 'Default',
  CLICK: 'Click',
  HOVER: 'Hover',
} as const

export type SourceType = typeof SourceTypes[keyof typeof SourceTypes]