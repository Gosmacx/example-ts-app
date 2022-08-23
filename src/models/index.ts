export interface PostType {
    published_at: string,
    status: number;
    entry: {
        message: string,
        image: string[],
        type: 'photo' | 'video'
    };
};