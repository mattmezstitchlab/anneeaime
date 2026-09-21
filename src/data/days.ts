import type { Day } from '../lib/types';
import { DAYS_PART1 } from './days-part1';
import { DAYS_PART2 } from './days-part2';
import { DAYS_PART3 } from './days-part3';
import { DAYS_PART4 } from './days-part4';

// Merge all 365 days in chronological order.
export const ALL_DAYS: Day[] = [
  ...DAYS_PART1,
  ...DAYS_PART2,
  ...DAYS_PART3,
  ...DAYS_PART4,
].sort((a, b) => a.id - b.id);