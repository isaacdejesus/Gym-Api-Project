export interface exerciseState {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string
}

export interface ExtraDetail {
        icon: any,
        name: string
    }
export interface video {
    video: {
        channelId: string,
        thumbnails: any,
        title: string,
        videoId: string,
        channelName: string
    }
}

export interface BPart {
    name: string,
    icon: any
};
