import Link from "next/link";
import styles from 'styles/home.module.css';
import { Trepo } from "types/types";
export default function RepoList({children}:{children: Trepo[]}) {

	const data = [...children.sort((a,b)=>(new Date(b.updatedAt as any) as any) - (new Date(a.updatedAt as any) as any))];
	
	return (
		<div className={styles.repoBox}>
			<div className={styles.repo}>
				<div className={styles.repoName} style={{color:'var(--category-color)',fontSize:'1rem'}}>
					레포지토리
				</div>
				<div className={styles.repoLanguage} style={{color:'var(--category-color)',fontSize:'1rem'}}>
					언어
				</div>
				<div className={styles.desc} style={{color:'var(--category-color)',fontSize:'1rem'}}>
					설명
				</div>
				<div className={styles.updatedAt} style={{color:'var(--category-color)',fontSize:'1rem'}}>
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