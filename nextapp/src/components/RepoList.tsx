import Link from "next/link";
import styles from 'styles/home.module.css';
import { Trepo } from "types/types";
export default function RepoList({children}:{children: Trepo[]}) {

	const data = [...children.map(el=>{
		return {
			...el,
			createdAt: new Intl.DateTimeFormat('ko-KR').format(new Date(el.createdAt as any)).replaceAll(' ',''),
			updatedAt: new Intl.DateTimeFormat('ko-KR').format(new Date(el.updatedAt as any)).replaceAll(' ',''),
		};
	}).sort((a,b)=>(new Date(b.updatedAt) as any) - (new Date(a.updatedAt) as any))];
	return (
		<div className={styles.repoBox}>
			<div className={styles.repo} style={{color:'white'}}>
				<div className={styles.repoName}>
					레포지토리 명
				</div>
				<div className={styles.repoLanguage}>
					언어
				</div>
				<div className={styles.desc}>
					설명
				</div>
				<div className={styles.updatedAt}>
					업데이트
				</div>
			</div>
			{ data.map(el=>{
				return(
					<div className={styles.repo} key={el.name}>
						<div className={styles.repoName}>
							<Link href={el.githubUrl}>
								{el.name}
							</Link>
						</div>
						<div className={styles.repoLanguage}>
							{el.langauge}
						</div>
						<div className={styles.desc}>
							{el.description ?? '없음'}
						</div>
						<div className={styles.updatedAt}>
							{el.updatedAt.slice(0,-1)}
						</div>
					</div>
				)
				})
			}
		</div>
	)
};