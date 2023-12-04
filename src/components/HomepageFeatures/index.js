import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '热点信息知识库',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        收集国内外开源发展热点、政策走向、技术动态以及与数字经济等相关的发展态势
      </>
    ),
  },
  {
    title: '行业一线实践专家供稿',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        在横向研究方向上，扩展到开源发展战略、开源商业化、开源合规化、开源教育等专题研究以及开源生态白皮书等研究范畴
      </>
    ),
  },
  {
    title: '做国内开源领域最具影响力的期刊',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        面向 1000 名开源利益相关方，外延影响数十万开源产业从业者的深度评论期刊
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
