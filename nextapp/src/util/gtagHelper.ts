export const preview = (GA_TRACKING_ID: string, url: string) => {
	window.gtag("config", GA_TRACKING_ID, {
		page_path: url,
	});
};