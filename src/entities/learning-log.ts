export interface MonthlyLearningTimeSchema {
  date: string
  hour: number
}

export interface PieChartSchema {
  name: string
  ratio: number
}

export interface ResponseLearningLogSchema {
  today_time: number
  monthly_sum: number
  total_sum: number
  monthly_learning_times: MonthlyLearningTimeSchema[]
  language_circle: PieChartSchema[]
  content_circle: PieChartSchema[]
}

export class LearningLog {
  todayTime: number
  monthlySum: number
  totalSum: number
  monthlyLearningTimes: MonthlyLearningTimeSchema[]
  languageCircleDatasets: PieChartSchema[]
  contentCircleDatasets: PieChartSchema[]

  constructor(props: ResponseLearningLogSchema) {
    this.todayTime = props.today_time
    this.monthlySum = Number(props.monthly_sum)
    this.totalSum = Number(props.total_sum)
    this.monthlyLearningTimes = props.monthly_learning_times
    this.contentCircleDatasets = props.content_circle
    this.languageCircleDatasets = props.language_circle
  }
}
