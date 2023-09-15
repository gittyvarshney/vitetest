export type responseType = {
    title: string,
    labels ?: {
        color: string,
        name: string
    }[],
    number: number,
    created_at: string,
    user: {
        login: string
    },
    pull_request: boolean,
    assignee: string | null,
    comments: number | null
}

export type responseData = {
    data: responseType[]
}