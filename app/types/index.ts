export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  prefix: string;
  label: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  body: string;
}

export interface PlatformCard {
  id: string;
  label: string;
  title: string;
  body: string;
}

export interface UseCase {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  result: string;
}

export interface FirmProfile {
  label: string;
  value: string;
}

export interface CompetitorCard {
  id: string;
  name: string;
  type: string;
  doesWell: string;
  doesntDo: string;
  isHighlighted: boolean;
}

export interface Step {
  number: string;
  title: string;
  body: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
