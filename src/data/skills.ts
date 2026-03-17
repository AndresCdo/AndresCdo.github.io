export interface SkillGroup {
  category: string;
  icon:     string;
  items:    string[];
}

export const skills: SkillGroup[] = [
  { category: 'Container & Orchestration', icon: '🐳', items: ['Docker', 'Kubernetes', 'Helm', 'containerd'] },
  { category: 'Cloud & IaC',               icon: '☁️', items: ['GCP', 'Terraform', 'Ansible', 'Pulumi'] },
  { category: 'CI/CD & Automation',        icon: '⚙️', items: ['GitHub Actions', 'Jenkins', 'ArgoCD', 'GitLab CI'] },
  { category: 'Observability',             icon: '📊', items: ['Prometheus', 'Grafana', 'Loki', 'Nagios'] },
  { category: 'Programming',              icon: '🐍', items: ['Python', 'Bash', 'Go', 'YAML/JSON'] },
  { category: 'Linux & Networking',        icon: '🐧', items: ['Debian/Ubuntu', 'RHEL', 'Nginx', 'Apache'] },
  { category: 'Databases',                icon: '🗄️', items: ['MySQL', 'MariaDB', 'PostgreSQL', 'Redis'] },
  { category: 'Version Control',          icon: '🔀', items: ['Git', 'GitHub', 'GitLab', 'Gitflow'] },
];
