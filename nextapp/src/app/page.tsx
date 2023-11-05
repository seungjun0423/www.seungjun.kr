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
	console.log("여기 부터 시작입니다",data.data.filter(el=>!el.fork));
	
  return (
    <section key='home' className={styles.home}>
			<div className={styles.box}>
				방문해주셔서 감사합니다.<br/> 
			</div>
			
    </section>
  );
}
