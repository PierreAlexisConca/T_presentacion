import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,              // ← cambiar a true
  imports: [CommonModule],       // ← agregar esta línea
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  // ── Datos personales ──────────────────────────────────────────
  nombre      = 'Pierre Alexis Conca Flores';
  carrera     = 'Análisis de Sistemas Empresariales';
  semestre    = '3er Ciclo';
  edad        = 20;
  correo      = 'pierre.conca@vallegrande.edu.pe';
  telefono    = '+51 925 777 965';
  ciudad      = 'Cañete, Perú';
  github      = 'https://github.com/PierreAlexisConca';
  linkedin    = 'https://www.linkedin.com/in/pierre-alexis-conca-flores-2a7172360/';
  foto        = 'data:image/jpeg;base64,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';

  // ── Sobre mí ──────────────────────────────────────────────────
  sobreMi = `Estudiante apasionado por el desarrollo web y las nuevas tecnologías.
Me enfoco en construir soluciones elegantes y eficientes, con especial interés
en el frontend moderno y la arquitectura de software. Mi objetivo es contribuir
a proyectos de impacto social usando tecnología de vanguardia.`;

  // ── Skills ────────────────────────────────────────────────────
  skills: string[] = [
    'HTML5', 'CSS3', 'TypeScript', 'Angular',
    'JavaScript', 'Git', 'Node.js', 'Figma'
  ];

  // ── Formación académica ───────────────────────────────────────
  formacion = [
    {
      titulo: 'Ingeniería de Sistemas',
      institucion: 'Instituto Valle Grande',
      anio: '2025 – Presente'
    },

  ];

  // ── Proyectos ─────────────────────────────────────────────────
  proyectos = [
    {
      nombre: 'Sistema de Gestión de Inventario',
      descripcion: 'Aplicación web para control de stock con reportes en tiempo real.',
      tecnologias: ['Angular', 'Node.js', 'MongoDB']
    },
    {
      nombre: 'Creacion de Proyecto PALEES',
      descripcion: 'Pagina web para el proyecto PALEES, con información sobre el proyecto y sus objetivos.',
      tecnologias: ['TypeScript', 'Github', 'CSS', 'HTML', 'java']
    }
    
  ];

  // ── Interactividad 1: Modo oscuro ────────────────────────────
  darkMode = false;
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  // ── Interactividad 2: Mostrar/ocultar info extra ──────────────
  showExtra = false;
  toggleExtra() {
    this.showExtra = !this.showExtra;
  }

  // ── Interactividad 3: Frase profesional rotativa ──────────────
  frases: string[] = [
    '🚀 "El código limpio es poesía en movimiento."',
    '💡 "Cada bug es una oportunidad de aprender."',
    '🌐 "Construyo el futuro, una línea a la vez."',
    '⚡ "La tecnología bien usada transforma vidas."'
  ];
  fraseIndex = 0;
  get fraseActual(): string {
    return this.frases[this.fraseIndex];
  }
  cambiarFrase() {
    this.fraseIndex = (this.fraseIndex + 1) % this.frases.length;
  }
}