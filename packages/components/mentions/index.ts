import type { MentionsComponent, MentionsOptionComponent } from './src/types'

import Mentions from './src/Mentions'
import MentionsOption from './src/MentionsOption'

const IxMentions = Mentions as unknown as MentionsComponent
const IxMentionsOption = MentionsOption as unknown as MentionsOptionComponent

export { IxMentions, IxMentionsOption }

export type {
  MentionsInstance,
  MentionsPublicProps as MentionsProps,
  MentionsOptionInstance,
  MentionsOptionPublicProps as MentionsOptionProps,
  MentionsOption,
  MentionsFilterFn,
} from './src/types'
