export interface SkillGroup {
  category: string;
  icon:     string;
  items:    string[];
}

export const skills: SkillGroup[] = [
  { category: 'Container & Orchestration', icon: 'cluster',     items: ['Docker', 'Kubernetes', 'Helm', 'containerd'] },
  { category: 'Cloud & IaC',               icon: 'cloud-layers', items: ['GCP', 'Terraform', 'Ansible', 'Pulumi'] },
  { category: 'CI/CD & Automation',        icon: 'workflow',    items: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitLab CI'] },
  { category: 'Observability',             icon: 'chart',       items: ['Prometheus', 'Grafana', 'Loki', 'Nagios'] },
  { category: 'Programming',               icon: 'code',        items: ['Python', 'Bash', 'Go', 'YAML/JSON'] },
  { category: 'Linux & Networking',        icon: 'network',     items: ['Debian/Ubuntu', 'RHEL', 'Nginx', 'Apache'] },
  { category: 'Databases',                 icon: 'database',    items: ['MySQL', 'MariaDB', 'PostgreSQL', 'Redis'] },
  { category: 'Version Control',           icon: 'git-branch',  items: ['Git', 'GitHub', 'GitLab', 'Gitflow'] },
];
