export interface Project {
  title:       string;
  description: string;
  tech:        string[];
  url:         string;
  featured:    boolean;
  category:    string;
}

export const projects: Project[] = [
  {
    title:       'Kubernetes Auto-Scaling Pipeline',
    description: 'Designed to automate Kubernetes deployments with horizontal scaling and health-based rollout checks. Combines CI/CD orchestration with Prometheus metrics to reduce manual release steps.',
    tech:        ['Kubernetes', 'Helm', 'Prometheus', 'GitHub Actions', 'Python'],
    url:         '/contact/?subject=Kubernetes%20Auto-Scaling%20Pipeline',
    featured:    true,
    category:    'DevOps',
  },
  {
    title:       'Terraform GCP Infrastructure Modules',
    description: 'Built to standardize GCP provisioning across environments using reusable Terraform modules. Covers core infrastructure components such as networking, compute, and access control.',
    tech:        ['Terraform', 'GCP', 'Cloud SQL', 'GKE', 'IAM'],
    url:         '/contact/?subject=Terraform%20GCP%20Infrastructure%20Modules',
    featured:    true,
    category:    'IaC',
  },
  {
    title:       'Ansible Playbook Collection',
    description: 'Created to keep Linux server setup and maintenance consistent through repeatable playbooks. Focuses on configuration automation, baseline hardening, and deployment routines.',
    tech:        ['Ansible', 'Linux', 'Bash', 'YAML'],
    url:         '/contact/?subject=Ansible%20Playbook%20Collection',
    featured:    true,
    category:    'Automation',
  },
  {
    title:       'Grafana Monitoring Dashboard',
    description: 'Assembles dashboards and alert views to improve operational visibility for containerized workloads. Integrates metrics and logs to support faster troubleshooting.',
    tech:        ['Grafana', 'Prometheus', 'Loki', 'Docker', 'Alertmanager'],
    url:         '/contact/?subject=Grafana%20Monitoring%20Dashboard',
    featured:    false,
    category:    'Monitoring',
  },
  {
    title:       'Python DevOps Toolkit',
    description: 'Developed to automate common operational tasks with small, reusable Python utilities. Includes tooling for API interactions, log processing, and scripted workflows.',
    tech:        ['Python', 'GCP API', 'Boto3', 'Click', 'Pytest'],
    url:         '/contact/?subject=Python%20DevOps%20Toolkit',
    featured:    false,
    category:    'Automation',
  },
  {
    title:       'Personal Portfolio Website',
    description: 'Built to document projects and technical writing in one maintainable site. Uses Astro and GitHub Pages with CI/CD automation for consistent publishing.',
    tech:        ['Astro', 'TypeScript', 'GitHub Actions', 'CSS'],
    url:         'https://github.com/AndresCdo/AndresCdo.github.io',
    featured:    false,
    category:    'Web',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects    = projects.filter(p => !p.featured);
