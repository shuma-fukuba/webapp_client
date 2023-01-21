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
  today_time: number
  monthly_sum: number
  total_sum: number
  monthly_learning_times: MonthlyLearningTimeSchema[]
  language_circle: LanguageCircleSchema[]
  content_circle: ContentCircleSchema[]
}

export class LearningLog {
  todayTime: number
  monthlySum: number
  totalSum: number
  monthlyLearningTimes: MonthlyLearningTimeSchema[]
  languageCircleDatasets: LanguageCircleSchema[]
  contentCircleDatasets: ContentCircleSchema[]

  constructor(props: ResponseLearningLogSchema) {
    this.todayTime = props.today_time
    this.monthlySum = Number(props.monthly_sum)
    this.totalSum = Number(props.total_sum)
    this.monthlyLearningTimes = props.monthly_learning_times
    this.contentCircleDatasets = props.content_circle
    this.languageCircleDatasets = props.language_circle
  }
}
