import RepoList from "components/RepoList";
import styles from 'styles/home.module.css';
import { Octokit } from "octokit";
import { Trepo } from "types/types";

export default async function Home() {
	const octokit = new Octokit({
		auth: process.env.NEXT_GITHUB_TOKEN
	});

	const data = await octokit.request('GET /users/{username}/repos', {
		username: "seungjun0423",
		per_page:100,
	});

	const repoList: Trepo[] = data.data.filter(el=>!el.fork).map(el=>{
		return {
			name: el.name,
			private: el.private,
			githubUrl: el.html_url,
			description: el.description,
			createdAt: new Intl.DateTimeFormat('ko-KR').format(new Date(el.created_at as any)).replaceAll(' ',''),
			updatedAt: new Intl.DateTimeFormat('ko-KR').format(new Date(el.pushed_at as any)).replaceAll(' ',''),
			hompage: el.homepage,
			langauge: el.language,
		}
	});
  return (
    <section key='home' className={styles.home}>
			<div className={styles.box}>
				Github Repo
			</div>
			{/* <div className={styles.allPostList}>
				<button className={styles.btn}>
					전체 글목록 보러가기
				</button>
			</div> */}
			<RepoList>
				{repoList}
			</RepoList>
    </section>
  );
}
