import Link from "next/link";
import styles from 'styles/home.module.css';
import { Octokit } from "octokit";

export default async function Home() {
	const octokit = new Octokit({
		auth: process.env.NEXT_GITHUB_TOKEN
	});

	const data = await octokit.request('GET /users/{username}/repos', {
		username: "seungjun0423",
		per_page:100,
		headers: {
			'X-GitHub-Api-Version': '2022-11-28'
		}
	});
	
	const repoList = data.data.filter(el=>!el.fork).map(el=>{
		return {
			name: el.name,
			private: el.private,
			githubUrl: el.html_url,
			description: el.description,
			createdAt: el.created_at,
			updatedAt: el.pushed_at,
			hompage: el.homepage,
			langauge: el.language,
		}
	});
	
  return (
    <section key='home' className={styles.home}>
			<div className={styles.box}>
				방문해주셔서 감사합니다.<br/> 
			</div>
    </section>
  );
}
