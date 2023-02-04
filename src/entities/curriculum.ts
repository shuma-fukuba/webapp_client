export interface ResponseLanguageSchema {
    language_id: number
    language: string
}

export interface ResponseLearningContentSchema {
    learning_content_id: number
    name: string
}

export interface ResponseCurriculumsSchema {
    languages: ResponseLanguageSchema[]
    contents: ResponseLearningContentSchema[]
}
