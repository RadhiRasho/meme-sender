export type MemeResponse = {
	postLink: string;
	subreddit: string;
	title: string;
	url: string;
	nsfw: boolean;
	spoiler: boolean;
	author: string;
	ups: number;
	preview: string[];
};

export type MultipleMemeResponse = {
	memes: MemeResponse[];
	count: number;
};
