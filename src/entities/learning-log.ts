import { Entity, Id } from './base'
export interface MonthlyLearningTimeSchema {
  date: string
  hour: number
}

export interface LanguageCircleSchema {
  language: string
  ratio: number
}

export interface ContentCircleSchema {
  content: string
  ratio: number
}

export interface ResponseLearningLogSchema {
  todayTime: number
  monthlyTime: number
  totalSum: number
  monthlyLearningTimes: MonthlyLearningTimeSchema[]
  languageCircleDatasets: LanguageCircleSchema[]
  contentCircleDatasets: ContentCircleSchema[]
}

export class LearningLog {
  todayTime: number
  monthlyTime: number
  totalSum: number
  monthlyLearningTimes: MonthlyLearningTimeSchema[]
  languageCircleDatasets: LanguageCircleSchema[]
  contentCircleDatasets: ContentCircleSchema[]

  constructor(props: ResponseLearningLogSchema) {
    this.todayTime = props.todayTime
    this.monthlyTime = props.monthlyTime
    this.totalSum = props.totalSum
    this.monthlyLearningTimes = props.monthlyLearningTimes
    this.contentCircleDatasets = props.contentCircleDatasets
  }
}
