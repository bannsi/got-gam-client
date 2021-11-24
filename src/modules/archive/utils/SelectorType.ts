const SelectorType = {
  PIECE: 'piece',
  COLLECTION: 'collection',
  LINK: 'link'
} as const;

export type SelectorType = typeof SelectorType[keyof typeof SelectorType];
