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
    description: 'End-to-end CI/CD pipeline with Kubernetes HPA and custom metrics via Prometheus. Supports zero-downtime rolling updates and automatic rollback on failed health checks.',
    tech:        ['Kubernetes', 'Helm', 'Prometheus', 'GitHub Actions', 'Python'],
    url:         'https://github.com/AndresCdo/k8s-autoscale-pipeline',
    featured:    true,
    category:    'DevOps',
  },
  {
    title:       'Terraform GCP Infrastructure Modules',
    description: 'Reusable Terraform modules for provisioning production-grade GCP infrastructure. Includes VPC, GKE clusters, Cloud SQL, and IAM policies following security best practices.',
    tech:        ['Terraform', 'GCP', 'Cloud SQL', 'GKE', 'IAM'],
    url:         'https://github.com/AndresCdo/terraform-gcp-modules',
    featured:    true,
    category:    'IaC',
  },
  {
    title:       'Ansible Playbook Collection',
    description: 'A curated collection of Ansible roles and playbooks for automating Linux server configuration, hardening, and software deployment across heterogeneous environments.',
    tech:        ['Ansible', 'Linux', 'Bash', 'YAML'],
    url:         'https://github.com/AndresCdo/ansible-playbooks',
    featured:    true,
    category:    'Automation',
  },
  {
    title:       'Grafana Monitoring Dashboard',
    description: 'Plug-and-play Grafana dashboards for monitoring containerised workloads with Prometheus, Alertmanager, and Loki for log aggregation.',
    tech:        ['Grafana', 'Prometheus', 'Loki', 'Docker', 'Alertmanager'],
    url:         'https://github.com/AndresCdo/grafana-dashboards',
    featured:    false,
    category:    'Monitoring',
  },
  {
    title:       'Python DevOps Toolkit',
    description: 'A Python library providing utilities for interacting with cloud APIs, parsing logs, sending alerts, and automating routine DevOps tasks.',
    tech:        ['Python', 'GCP API', 'Boto3', 'Click', 'Pytest'],
    url:         'https://github.com/AndresCdo/python-devops-toolkit',
    featured:    false,
    category:    'Automation',
  },
  {
    title:       'Personal Portfolio Website',
    description: 'This very website! Built with Astro, hosted on GitHub Pages, with CI/CD automation, WCAG 2.1 AA compliance, dark/light theme, and client-side search.',
    tech:        ['Astro', 'TypeScript', 'GitHub Actions', 'CSS', 'Lunr.js'],
    url:         'https://github.com/AndresCdo/AndresCdo.github.io',
    featured:    false,
    category:    'Web',
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const otherProjects    = projects.filter(p => !p.featured);
