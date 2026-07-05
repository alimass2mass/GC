/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Settings, 
  HelpCircle, 
  Award, 
  Download, 
  Trash2, 
  RefreshCw, 
  Columns, 
  Flame, 
  Thermometer, 
  Wind, 
  Database, 
  Award as CertificateIcon, 
  Sun, 
  Moon, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Info,
  ChevronDown,
  Printer,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  GraduationCap,
  Users
} from 'lucide-react';
import { translations, Translation } from './translations';

// --- High Fidelity Vector Logo of the Basra Chemical Engineers Association ---
export function AssociationLogo({ className = "h-16 w-16", showText = false, theme = 'dark' }: { className?: string, showText?: boolean, theme?: 'light' | 'dark' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={className}>
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="yellowOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="25%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="75%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circular Rings */}
        <circle cx="250" cy="250" r="235" fill="none" stroke="url(#goldGrad)" strokeWidth="6" />
        <circle cx="250" cy="250" r="222" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="10,6" />

        {/* Multi-colored Flame / Water Drop representing oil & chemical energy */}
        {/* Left Green Curve */}
        <path 
          d="M 250 50 C 120 140 150 310 250 360 C 265 290 230 210 250 50 Z" 
          fill="url(#greenGrad)" 
        />
        {/* Middle Blue Curve */}
        <path 
          d="M 250 50 C 180 160 205 300 270 340 C 285 250 260 140 250 50 Z" 
          fill="url(#blueGrad)" 
        />
        {/* Right Orange/Yellow Curve */}
        <path 
          d="M 250 50 C 380 140 350 310 250 360 C 315 290 320 190 250 50 Z" 
          fill="url(#yellowOrangeGrad)" 
        />

        {/* Detailed Industrial Refinery Columns */}
        <g transform="translate(0, 20)">
          {/* Central Main Column */}
          <rect x="236" y="160" width="28" height="160" fill="url(#metalGrad)" rx="2" />
          <path d="M 236 160 Q 250 140 264 160 Z" fill="url(#goldGrad)" />
          <rect x="232" y="185" width="36" height="5" fill="#1e293b" />
          <rect x="232" y="215" width="36" height="5" fill="#1e293b" />
          <rect x="232" y="245" width="36" height="5" fill="#1e293b" />
          <rect x="232" y="275" width="36" height="5" fill="#1e293b" />
          
          {/* Left Secondary Column */}
          <rect x="200" y="190" width="22" height="130" fill="url(#metalGrad)" rx="1.5" />
          <path d="M 200 190 Q 211 175 222 190 Z" fill="#475569" />
          <rect x="196" y="220" width="30" height="4" fill="#0f172a" />
          <rect x="196" y="255" width="30" height="4" fill="#0f172a" />

          {/* Far Left Small Columns */}
          <rect x="175" y="225" width="14" height="95" fill="url(#metalGrad)" />
          <rect x="152" y="245" width="12" height="75" fill="url(#metalGrad)" />

          {/* Right Secondary Column */}
          <rect x="276" y="200" width="20" height="120" fill="url(#metalGrad)" rx="1.5" />
          <path d="M 276 200 Q 286 185 296 200 Z" fill="#475569" />
          <rect x="272" y="235" width="28" height="4" fill="#0f172a" />
          <rect x="272" y="270" width="28" height="4" fill="#0f172a" />

          {/* Far Right Reactor Spherical Vessel */}
          <circle cx="325" cy="270" r="26" fill="url(#metalGrad)" stroke="#1e293b" strokeWidth="1.5" />
          <rect x="321" y="295" width="8" height="25" fill="#475569" />
          <path d="M 314 250 Q 325 240 336 250 Z" fill="url(#goldGrad)" />

          {/* Connecting Pipe Systems */}
          <path d="M 182 235 H 200" fill="none" stroke="#94a3b8" strokeWidth="3" />
          <path d="M 222 215 H 236" fill="none" stroke="#94a3b8" strokeWidth="3" />
          <path d="M 264 215 H 276" fill="none" stroke="#94a3b8" strokeWidth="3" />
          <path d="M 296 235 H 325" fill="none" stroke="#94a3b8" strokeWidth="3" />
          <path d="M 250 185 H 285 V 320" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeOpacity="0.7" />
        </g>

        {/* Sweeping Golden & Blue Pathway Arcs */}
        <path 
          d="M 90 240 Q 220 400 410 240" 
          fill="none" 
          stroke="url(#goldGrad)" 
          strokeWidth="12" 
          strokeLinecap="round" 
          filter="url(#glow)"
        />
        <path 
          d="M 105 252 Q 220 388 395 252" 
          fill="none" 
          stroke="#1e3a8a" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M 120 264 Q 220 376 380 264" 
          fill="none" 
          stroke="#60a5fa" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />

        {/* Lower Left Mini Shield Emblem */}
        <g transform="translate(95, 275) scale(0.72)">
          <path d="M 10 10 Q 50 -5 90 10 Q 90 65 50 95 Q 10 65 10 10 Z" fill="#1e293b" stroke="url(#goldGrad)" strokeWidth="4" />
          <path d="M 15 12 Q 50 -1 85 12 Q 85 62 50 89 Q 15 62 15 12 Z" fill="none" stroke="#ffffff" strokeWidth="2" />
          <path d="M 16 13 Q 33 6 50 12 L 50 87 Q 33 61 16 25 Z" fill="#10b981" />
          <path d="M 84 13 Q 67 6 50 12 L 50 87 Q 67 61 84 25 Z" fill="#1e3a8a" />
          <rect x="44" y="10" width="12" height="76" fill="#f8fafc" />
          <line x1="50" y1="22" x2="50" y2="74" stroke="#1e293b" strokeWidth="3.5" />
          <circle cx="50" cy="32" r="6" fill="#ef4444" />
        </g>
      </svg>

      {showText && (
        <div className="text-center mt-2">
          <p className="text-xs font-black tracking-wider text-blue-500 font-mono">G&amp;OT ENGINEERING</p>
          <p className={`text-sm font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>الهيئة العامة للمهندسين الكيميائيين في البصرة</p>
        </div>
      )}
    </div>
  );
}

// --- Types & Interfaces ---

export interface Compound {
  id: string;
  name: Record<string, string>;
  formula: string;
  boilingPoint: number;
  polarity: number;
  concentration: number;
  responseFactors: Record<string, number>;
}

export interface Sample {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  compounds: Compound[];
}

export interface ElutionResult {
  compound: Compound;
  retentionTime: number; // in minutes
  height: number;
  sigma: number; // in minutes
  area: number;
  resolution: number;
}

export interface SavedRun {
  id: string;
  name: string;
  date: string;
  sampleId: string;
  detectorId: string;
  columnId: string;
  ovenMode: 'isothermal' | 'programmed';
  carrierGas: string;
  flowRate: number;
  isothermalTemp: number;
  initialTemp: number;
  rampRate: number;
  finalTemp: number;
  elutionTimes: { compoundId: string; rt: number; height: number; area: number; resolution: number }[];
  rawCurvePoints: { x: number; y: number }[]; // Sampled points for overlay comparison
}

// --- High Fidelity Realistic Samples Database ---

const SAMPLES: Sample[] = [
  {
    id: 'blood_alcohol',
    name: {
      ar: "تحليل كحول الدم الجنائي",
      en: "Forensic Blood Alcohol",
      es: "Alcohol en Sangre Forense",
      de: "Forensischer Blutalkohol"
    },
    description: {
      ar: "فصل وتحليل الكحولات السامة والأسيتون في تطبيقات الطب الشرعي والتحاليل الجنائية لكشف حالات التسمم الكحولي والمخالفات المرورية.",
      en: "Separation and quantification of toxic alcohols and acetone in clinical forensic toxicology assays.",
      es: "Separación y cuantificación de alcoholes tóxicos y acetona en ensayos de toxicología forense.",
      de: "Trennung und Quantifizierung von toxischen Alkoholen und Aceton für forensische Toxikologie-Analysen."
    },
    compounds: [
      {
        id: 'acetone',
        name: { ar: "أسيتون", en: "Acetone", es: "Acetona", de: "Aceton" },
        formula: "C3H6O",
        boilingPoint: 56.0,
        polarity: 0.65,
        concentration: 15,
        responseFactors: { FID: 0.85, TCD: 0.70, ECD: 0.10, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'methanol',
        name: { ar: "ميثانول", en: "Methanol", es: "Metanol", de: "Methanol" },
        formula: "CH3OH",
        boilingPoint: 64.7,
        polarity: 0.90,
        concentration: 20,
        responseFactors: { FID: 0.60, TCD: 0.60, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'ethanol',
        name: { ar: "إيثانول (العنصر النشط)", en: "Ethanol (Active)", es: "Etanol (Activo)", de: "Ethanol (Aktiv)" },
        formula: "C2H5OH",
        boilingPoint: 78.4,
        polarity: 0.85,
        concentration: 40,
        responseFactors: { FID: 0.95, TCD: 0.65, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'isopropanol',
        name: { ar: "أيزوبروبانول", en: "Isopropanol", es: "Isopropanol", de: "Isopropanol" },
        formula: "C3H7OH",
        boilingPoint: 82.6,
        polarity: 0.80,
        concentration: 15,
        responseFactors: { FID: 0.90, TCD: 0.62, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'n_propanol',
        name: { ar: "ن-بروبانول (معيار داخلي)", en: "n-Propanol (Internal Std)", es: "n-Propanol (Estándar Int)", de: "n-Propanol (Interner Std)" },
        formula: "C3H7OH",
        boilingPoint: 97.0,
        polarity: 0.80,
        concentration: 10,
        responseFactors: { FID: 1.0, TCD: 0.60, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      }
    ]
  },
  {
    id: 'natural_gas',
    name: {
      ar: "الغاز الطبيعي الحقلّي",
      en: "Field Natural Gas",
      es: "Gas Natural de Campo",
      de: "Erdgas Feldanalyse"
    },
    description: {
      ar: "تحليل التركيب العضوي للغاز الطبيعي بما في ذلك الهيدروكربونات الخفيفة والغازات الخاملة (النيتروجين وثاني أكسيد الكربون) - توضح تفوق كاشف TCD كونه كاشفاً عاماً.",
      en: "Analysis of light hydrocarbons and inert industrial gases like CO2 and Nitrogen - demonstrates TCD as a universal detector.",
      es: "Análisis de hidrocarburos ligeros y gases industriales inertes como CO2 y nitrógeno; demuestra el uso del TCD.",
      de: "Analyse von leichten Kohlenwasserstoffen und inerten Industrien wie CO2 und Stickstoff - zeigt TCD als Universaldetektor."
    },
    compounds: [
      {
        id: 'nitrogen',
        name: { ar: "نيتروجين", en: "Nitrogen", es: "Nitrógeno", de: "Stickstoff" },
        formula: "N2",
        boilingPoint: -195.8,
        polarity: 0.0,
        concentration: 8,
        responseFactors: { FID: 0.0, TCD: 0.85, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'methane',
        name: { ar: "ميثان", en: "Methane", es: "Metano", de: "Methan" },
        formula: "CH4",
        boilingPoint: -161.5,
        polarity: 0.0,
        concentration: 65,
        responseFactors: { FID: 1.0, TCD: 0.75, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'carbon_dioxide',
        name: { ar: "ثاني أكسيد الكربون", en: "Carbon Dioxide", es: "Dióxido de Carbono", de: "Kohlendioxid" },
        formula: "CO2",
        boilingPoint: -78.5,
        polarity: 0.10,
        concentration: 5,
        responseFactors: { FID: 0.0, TCD: 0.90, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'ethane',
        name: { ar: "إيثان", en: "Ethane", es: "Etano", de: "Ethan" },
        formula: "C2H6",
        boilingPoint: -89.0,
        polarity: 0.0,
        concentration: 14,
        responseFactors: { FID: 0.95, TCD: 0.70, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'propane',
        name: { ar: "بروبان", en: "Propane", es: "Propano", de: "Propan" },
        formula: "C3H8",
        boilingPoint: -42.1,
        polarity: 0.0,
        concentration: 8,
        responseFactors: { FID: 0.90, TCD: 0.65, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      }
    ]
  },
  {
    id: 'crude_oil',
    name: {
      ar: "النفط الخام (تقطير محاكى C6-C16)",
      en: "Crude Oil (SimDist C6-C16)",
      es: "Petróleo Crudo (SimDist)",
      de: "Rohöl (Simulierte Destillation)"
    },
    description: {
      ar: "تحليل طيف الهيدروكربونات البارافينية المستقيمة الثقيلة لتحديد منحنى التبخر والتقطير للمكامن النفطية - ممتاز للأعمدة غير القطبية وكاشف FID.",
      en: "Simulated distillation separating straight-chain paraffinic hydrocarbons from C6 to C16 - ideal for non-polar columns and FID.",
      es: "Destilación simulada para separar hidrocarburos parafínicos lineales de C6 a C16, ideal para columnas no polares.",
      de: "Simulierte Destillation zur Trennung geradkettiger paraffinscher Kohlenwasserstoffe von C6 bis C16 - ideal für unpolare Säulen."
    },
    compounds: [
      {
        id: 'hexane',
        name: { ar: "هكسان (C6)", en: "Hexane (C6)", es: "Hexano (C6)", de: "Hexan (C6)" },
        formula: "C6H14",
        boilingPoint: 69.0,
        polarity: 0.0,
        concentration: 25,
        responseFactors: { FID: 1.0, TCD: 0.70, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'heptane',
        name: { ar: "هبتان (C7)", en: "Heptane (C7)", es: "Heptano (C7)", de: "Heptan (C7)" },
        formula: "C7H16",
        boilingPoint: 98.4,
        polarity: 0.0,
        concentration: 20,
        responseFactors: { FID: 1.0, TCD: 0.70, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'octane',
        name: { ar: "أوكتان (C8)", en: "Octane (C8)", es: "Octano (C8)", de: "Octan (C8)" },
        formula: "C8H18",
        boilingPoint: 125.6,
        polarity: 0.0,
        concentration: 15,
        responseFactors: { FID: 1.0, TCD: 0.68, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'nonane',
        name: { ar: "نونان (C9)", en: "Nonane (C9)", es: "Nonano (C9)", de: "Nonan (C9)" },
        formula: "C9H20",
        boilingPoint: 150.8,
        polarity: 0.0,
        concentration: 12,
        responseFactors: { FID: 1.0, TCD: 0.65, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'decane',
        name: { ar: "ديكان (C10)", en: "Decane (C10)", es: "Decano (C10)", de: "Decan (C10)" },
        formula: "C10H22",
        boilingPoint: 174.1,
        polarity: 0.0,
        concentration: 10,
        responseFactors: { FID: 1.0, TCD: 0.62, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'dodecane',
        name: { ar: "دوديكان (C12)", en: "Dodecane (C12)", es: "Dodecano (C12)", de: "Dodecan (C12)" },
        formula: "C12H26",
        boilingPoint: 216.2,
        polarity: 0.0,
        concentration: 10,
        responseFactors: { FID: 1.0, TCD: 0.58, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'hexadecane',
        name: { ar: "هيكساديكان (C16)", en: "Hexadecane (C16)", es: "Hexadecano (C16)", de: "Hexadecan (C16)" },
        formula: "C16H34",
        boilingPoint: 287.0,
        polarity: 0.0,
        concentration: 8,
        responseFactors: { FID: 1.0, TCD: 0.50, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      }
    ]
  },
  {
    id: 'pesticides',
    name: {
      ar: "خليط المبيدات الكيميائية البيئية",
      en: "Environmental Pesticide Mix",
      es: "Mezcla de Pesticidas Ambientales",
      de: "Pestizidmischung für Umweltanalytik"
    },
    description: {
      ar: "تحليل متقدم للملوثات والمبيدات الحشرية والفوسفورية لبيان الانتقائية والتحسس الفائق لكواشف ECD وNPD وFPD.",
      en: "Advanced analysis of pesticides demonstrating high selectivity for ECD, NPD, and FPD on specific heteroatoms.",
      es: "Análisis avanzado de pesticidas que demuestra una gran selectividad de ECD, NPD y FPD para heteroátomos específicos.",
      de: "Fortgeschrittene Analyse von Pestiziden zum Nachweis der hohen Selektivität von ECD, NPD und FPD für Heteroatome."
    },
    compounds: [
      {
        id: 'lindane',
        name: { ar: "ليندين (مبيد حشري مكلور)", en: "Lindane (Chlorinated)", es: "Lindano (Clorado)", de: "Lindan (Halogeniert)" },
        formula: "C6H6Cl6",
        boilingPoint: 323.0,
        polarity: 0.40,
        concentration: 25,
        responseFactors: { FID: 0.35, TCD: 0.30, ECD: 10.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'atrazine',
        name: { ar: "أترازين (مبيد نيتروجيني)", en: "Atrazine (Nitrogenous)", es: "Atrazina (Nitrogenada)", de: "Atrazin (Stickstoffhaltig)" },
        formula: "C8H14ClN5",
        boilingPoint: 200.0,
        polarity: 0.60,
        concentration: 25,
        responseFactors: { FID: 0.40, TCD: 0.30, ECD: 1.0, NPD: 9.5, FPD: 0.0 }
      },
      {
        id: 'malathion',
        name: { ar: "ملاثيون (فوسفوري-كبريتي)", en: "Malathion (P-S Organo)", es: "Malatión (Fósforo-Azufre)", de: "Malathion (P-S-Verbindung)" },
        formula: "C10H19O6PS2",
        boilingPoint: 156.0,
        polarity: 0.50,
        concentration: 25,
        responseFactors: { FID: 0.50, TCD: 0.30, ECD: 0.20, NPD: 4.5, FPD: 9.0 }
      },
      {
        id: 'parathion',
        name: { ar: "باراثيون (نيتروجيني-فوسفوري-كبريتي)", en: "Parathion (N-P-S Active)", es: "Paratión (N-P-S Activo)", de: "Parathion (N-P-S-Aktiv)" },
        formula: "C10H14NO5PS",
        boilingPoint: 375.0,
        polarity: 0.65,
        concentration: 25,
        responseFactors: { FID: 0.45, TCD: 0.30, ECD: 4.5, NPD: 8.5, FPD: 7.5 }
      }
    ]
  },
  {
    id: 'essential_oils',
    name: {
      ar: "الزيوت العطرية (مستخلص اللافندر)",
      en: "Essential Oils (Lavender Extract)",
      es: "Aceites Esenciales (Lavanda)",
      de: "Ätherische Öle (Lavendelextrakt)"
    },
    description: {
      ar: "تحليل وفصل التيربينات العطرية الطبيعية المستخلصة من زهور اللافندر - يوضح أثر القطبية ودرجات الغليان بالتزامن.",
      en: "Separation of plant terpenes and aromatic volatiles in lavender extracts - teaches combined effects of polarity and boiling point.",
      es: "Separación de terpenos vegetales y volátiles aromáticos en lavanda; enseña los efectos combinados de polaridad y punto de ebullición.",
      de: "Trennung pflanzlicher Terpene und aromatischer Duftstoffe in Lavendel - zeigt kombinierte Effekte von Polarität und Siedepunkt."
    },
    compounds: [
      {
        id: 'limonene',
        name: { ar: "ليمونين", en: "Limonene", es: "Limoneno", de: "Limonen" },
        formula: "C10H16",
        boilingPoint: 176.0,
        polarity: 0.15,
        concentration: 20,
        responseFactors: { FID: 1.0, TCD: 0.65, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'linalool',
        name: { ar: "لينالول", en: "Linalool", es: "Linalool", de: "Linalool" },
        formula: "C10H18O",
        boilingPoint: 198.0,
        polarity: 0.70,
        concentration: 35,
        responseFactors: { FID: 0.95, TCD: 0.63, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'linalyl_acetate',
        name: { ar: "أسيتات الليناليل", en: "Linalyl Acetate", es: "Acetato de Linalilo", de: "Linalylacetat" },
        formula: "C12H20O2",
        boilingPoint: 220.0,
        polarity: 0.55,
        concentration: 30,
        responseFactors: { FID: 0.90, TCD: 0.60, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      },
      {
        id: 'camphor',
        name: { ar: "كافور", en: "Camphor", es: "Alcanfor", de: "Kampfer" },
        formula: "C10H16O",
        boilingPoint: 204.0,
        polarity: 0.60,
        concentration: 15,
        responseFactors: { FID: 0.92, TCD: 0.62, ECD: 0.0, NPD: 0.0, FPD: 0.0 }
      }
    ]
  }
];

export default function App() {
  // --- UI and Settings States ---
  const [lang, setLang] = useState<string>('ar');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [showGuide, setShowGuide] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');
  const [studentCollege, setStudentCollege] = useState<string>('college1'); // 'college1' (الهندسة) or 'college2' (التقنية الهندسية)
  const [showWelcome, setShowWelcome] = useState<boolean>(true);
  
  // --- GC Simulation Parameter States ---
  const [selectedSampleId, setSelectedSampleId] = useState<string>('blood_alcohol');
  const [selectedDetectorId, setSelectedDetectorId] = useState<string>('FID');
  const [selectedColumnId, setSelectedColumnId] = useState<string>('non_polar'); // 'non_polar' (e.g. DB-5) or 'polar' (e.g. Carbowax)
  const [carrierGas, setCarrierGas] = useState<string>('He'); // 'He' | 'N2' | 'H2'
  const [flowRate, setFlowRate] = useState<number>(1.5); // mL/min (0.5 to 4.0)
  
  // Oven heating profile
  const [ovenMode, setOvenMode] = useState<'isothermal' | 'programmed'>('programmed');
  const [isothermalTemp, setIsothermalTemp] = useState<number>(120); // °C (50 to 300)
  const [initialTemp, setInitialTemp] = useState<number>(60); // °C
  const [rampRate, setRampRate] = useState<number>(15); // °C/min (2 to 40)
  const [finalTemp, setFinalTemp] = useState<number>(240); // °C

  // --- Run State Management ---
  const [isInjecting, setIsInjecting] = useState<boolean>(false);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0); // Current running time in seconds
  const [simSpeed, setSimSpeed] = useState<number>(5); // Acceleration speed factor (e.g. 1x, 5x, 10x, 20x)
  const [savedRuns, setSavedRuns] = useState<SavedRun[]>([]);
  const [comparisonRuns, setComparisonRuns] = useState<string[]>([]); // Saved Run IDs to compare
  const [showCompareMode, setShowCompareMode] = useState<boolean>(false);

  // --- Quiz Mode States ---
  const [isQuizMode, setIsQuizMode] = useState<boolean>(false);
  const [predictedOrder, setPredictedOrder] = useState<string[]>([]); // Compound IDs ordered
  const [quizChecked, setQuizChecked] = useState<boolean>(false);
  const [quizSuccess, setQuizSuccess] = useState<boolean>(false);
  const [hasCompletedQuizSuccessfully, setHasCompletedQuizSuccessfully] = useState<boolean>(false);

  const t: Translation = translations[lang] || translations.en;
  const isRtl = lang === 'ar';

  const selectedSample = useMemo(() => {
    return SAMPLES.find(s => s.id === selectedSampleId) || SAMPLES[0];
  }, [selectedSampleId]);

  // --- Physics Simulation Math Engine ---
  const simulatedElution = useMemo(() => {
    const columnLength = 30; // meters
    const dt = 0.5; // step size in seconds
    const colPolarity = selectedColumnId === 'polar' ? 0.95 : 0.05;
    const gasFactor = carrierGas === 'H2' ? 1.40 : carrierGas === 'He' ? 1.0 : 0.65;

    const calculated = selectedSample.compounds.map(compound => {
      let position = 0;
      let timeSec = 0;
      const maxSimulationTime = 1200; // 20 minutes limit

      // Base chemical thermodynamics
      // boilingPoint conversion to Kelvin
      const bpK = compound.boilingPoint + 273.15;
      
      // Enthalpy of vaporization deltaH modified by compound-column polarity interaction
      // Polar stationary phase strongly attracts polar molecules, increasing elution delay
      const polarityInteraction = compound.polarity * colPolarity * 1.6;
      const deltaH = 13500 * (bpK / 350) * (1.0 + polarityInteraction);
      
      // Entropy of phase transfer scaling factor
      const entropyFactor = 3.6 + (colPolarity * (1.0 - compound.polarity) * 0.4);

      // Numeric Euler integration of compound migration down the column
      while (position < columnLength && timeSec < maxSimulationTime) {
        let currentOvenTemp = 0;
        if (ovenMode === 'isothermal') {
          currentOvenTemp = isothermalTemp;
        } else {
          currentOvenTemp = Math.min(finalTemp, initialTemp + (rampRate * (timeSec / 60)));
        }
        
        const currentTK = currentOvenTemp + 273.15;
        
        // Partition/retention factor k' derived from Arrhenius-like temperature dependence
        const kPrime = Math.exp((deltaH / (8.314 * currentTK)) - entropyFactor) / (flowRate * gasFactor * 1.1);
        
        // Carrier gas velocity (m/s)
        const gasVelocity = 0.28 * flowRate * gasFactor;
        
        // Compound migration velocity (m/s)
        const migrationVelocity = gasVelocity / (1.0 + kPrime);
        
        position += migrationVelocity * dt;
        timeSec += dt;
      }

      const retentionTimeMin = timeSec / 60;
      
      // Detector response calculations
      const rf = compound.responseFactors[selectedDetectorId] ?? 0.1;
      const peakHeight = compound.concentration * rf * 110; // scale factor
      
      // Peak dispersion width (sigma in minutes)
      // High-efficiency carrier gas (H2) and high flow rates keep peaks narrow and sharp
      const diffusionConstant = carrierGas === 'H2' ? 0.012 : carrierGas === 'He' ? 0.020 : 0.038;
      const dispersionFactor = 1.6 / flowRate;
      const sigma = 0.035 + (retentionTimeMin * diffusionConstant) * dispersionFactor;
      
      return {
        compound,
        retentionTime: retentionTimeMin,
        height: peakHeight,
        sigma: sigma,
        area: peakHeight * sigma * Math.sqrt(2 * Math.PI) * 12, // Peak area integration
        resolution: 0 // Will be calculated below relative to neighboring peak
      };
    });

    // Sort compounds by retention times to compute chronological elution and resolutions
    calculated.sort((a, b) => a.retentionTime - b.retentionTime);

    // Calculate resolution (Rs) for adjacent peaks: Rs = 2 * (tR2 - tR1) / (W1 + W2) where W = 4 * sigma
    for (let i = 0; i < calculated.length; i++) {
      if (i === 0) {
        calculated[i].resolution = 0; // First peak has no preceding peak
      } else {
        const prev = calculated[i - 1];
        const current = calculated[i];
        const tDiff = current.retentionTime - prev.retentionTime;
        const widthSum = (4 * prev.sigma) + (4 * current.sigma);
        calculated[i].resolution = widthSum > 0 ? Number((2 * tDiff / widthSum).toFixed(2)) : 0;
      }
    }

    return calculated;
  }, [selectedSample, selectedColumnId, ovenMode, isothermalTemp, initialTemp, rampRate, finalTemp, flowRate, carrierGas, selectedDetectorId]);

  // Maximum time of chromatogram chart (based on the slowest eluting compound + margin)
  const maxTimeLimit = useMemo(() => {
    const lastRt = simulatedElution.reduce((max, c) => c.height > 0 ? Math.max(max, c.retentionTime) : max, 2);
    return Math.min(15, Math.max(5, Math.ceil(lastRt * 1.25))); // cap visual display at 15 minutes, minimum 5 minutes
  }, [simulatedElution]);

  // --- Real-time Animation Loop ---
  const animationRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const compareCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize predicted order when sample changes
  useEffect(() => {
    setPredictedOrder([...selectedSample.compounds].map(c => c.id));
    setQuizChecked(false);
    setQuizSuccess(false);
  }, [selectedSampleId]);

  // Handle run and ticker
  useEffect(() => {
    if (isRunning) {
      let lastTimestamp = performance.now();
      const tick = () => {
        const now = performance.now();
        const deltaSec = ((now - lastTimestamp) / 1000) * simSpeed;
        lastTimestamp = now;

        setCurrentTime(prev => {
          const next = prev + deltaSec;
          const limitSeconds = maxTimeLimit * 60;
          if (next >= limitSeconds) {
            setIsRunning(false);
            setIsCompleted(true);
            return limitSeconds;
          }
          return next;
        });

        animationRef.current = requestAnimationFrame(tick);
      };
      animationRef.current = requestAnimationFrame(tick);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRunning, simSpeed, maxTimeLimit]);

  // Calculate the live detector signal (voltage in microvolts) at a given time
  const getDetectorSignalAtTime = (timeMinutes: number, elutionList: ElutionResult[], withNoise = true) => {
    let signal = 25; // 25 µV baseline offset
    
    // Add realistic low-frequency baseline drift (thermal drift)
    if (ovenMode === 'programmed') {
      const heatFraction = Math.min(1.0, (timeMinutes * 60) / (maxTimeLimit * 60));
      signal += heatFraction * 18; // rise baseline up to 18 µV as oven heats
    }

    // Add high-frequency Gaussian noise
    if (withNoise) {
      signal += (Math.random() - 0.5) * 1.5;
    }

    // Accumulate signal of all eluting compounds (Gaussian curve model)
    elutionList.forEach(peak => {
      if (peak.height === 0) return; // Non-responsive analyte
      const exponent = -Math.pow(timeMinutes - peak.retentionTime, 2) / (2 * Math.pow(peak.sigma, 2));
      signal += peak.height * Math.exp(exponent);
    });

    return signal;
  };

  // --- Real-time Chromatogram Drawing Canvas ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const paddingLeft = 60;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 40;

    const plotWidth = width - paddingLeft - paddingRight;
    const plotHeight = height - paddingTop - paddingBottom;

    // Draw background grid
    ctx.fillStyle = theme === 'dark' ? '#0f172a' : '#ffffff';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = theme === 'dark' ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;
    
    // Grid lines - Time (X axis)
    const gridCols = 10;
    for (let i = 0; i <= gridCols; i++) {
      const x = paddingLeft + (i / gridCols) * plotWidth;
      ctx.beginPath();
      ctx.moveTo(x, paddingTop);
      ctx.lineTo(x, height - paddingBottom);
      ctx.stroke();

      // Labels on X
      const labelTime = ((i / gridCols) * maxTimeLimit).toFixed(1);
      ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#475569';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${labelTime} min`, x, height - paddingBottom + 18);
    }

    // Grid lines - Voltage (Y axis)
    // Scale max height visually
    const maxSignalVal = Math.max(150, ...simulatedElution.map(p => p.height)) * 1.25;
    const gridRows = 5;
    for (let i = 0; i <= gridRows; i++) {
      const y = paddingTop + (1 - i / gridRows) * plotHeight;
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();

      // Labels on Y
      const labelVoltage = Math.round((i / gridRows) * maxSignalVal);
      ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#475569';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`${labelVoltage} µV`, paddingLeft - 8, y + 3);
    }

    // Axis borders
    ctx.strokeStyle = theme === 'dark' ? '#64748b' : '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, paddingTop);
    ctx.lineTo(paddingLeft, height - paddingBottom);
    ctx.lineTo(width - paddingRight, height - paddingBottom);
    ctx.stroke();

    // Draw the continuous chromatogram line up to currentTime
    const maxTimeSec = maxTimeLimit * 60;
    const currentProgressFraction = currentTime / maxTimeSec;
    const activePlotWidth = plotWidth * currentProgressFraction;

    ctx.strokeStyle = theme === 'dark' ? '#10b981' : '#059669'; // Emerald curve
    ctx.lineWidth = 2;
    ctx.beginPath();

    const sampleStep = 1.5; // pixel density step
    let first = true;

    for (let px = 0; px <= activePlotWidth; px += sampleStep) {
      const fraction = px / plotWidth;
      const tMin = fraction * maxTimeLimit;
      const signalValue = getDetectorSignalAtTime(tMin, simulatedElution, true);

      const x = paddingLeft + px;
      const y = height - paddingBottom - (signalValue / maxSignalVal) * plotHeight;

      if (first) {
        ctx.moveTo(x, y);
        first = false;
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // Shade areas under already finished peaks (integration representation)
    simulatedElution.forEach((peak) => {
      // If the peak is fully or partially eluting at this time
      const peakTimeSec = peak.retentionTime * 60;
      if (currentTime > peakTimeSec - (peak.sigma * 4 * 60) && peak.height > 0) {
        // We shade the eluting area
        ctx.fillStyle = theme === 'dark' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(5, 150, 105, 0.12)';
        ctx.beginPath();
        
        let started = false;
        const peakStartPx = ((peak.retentionTime - 3 * peak.sigma) / maxTimeLimit) * plotWidth;
        const peakEndPx = Math.min(activePlotWidth, ((peak.retentionTime + 3 * peak.sigma) / maxTimeLimit) * plotWidth);

        for (let px = Math.max(0, peakStartPx); px <= peakEndPx; px += sampleStep) {
          const fraction = px / plotWidth;
          const tMin = fraction * maxTimeLimit;
          const signalValue = getDetectorSignalAtTime(tMin, [peak], false); // smooth curve without noise for fill

          const x = paddingLeft + px;
          const y = height - paddingBottom - (signalValue / maxSignalVal) * plotHeight;

          if (!started) {
            ctx.moveTo(x, height - paddingBottom);
            ctx.lineTo(x, y);
            started = true;
          } else {
            ctx.lineTo(x, y);
          }
        }
        if (started) {
          ctx.lineTo(paddingLeft + peakEndPx, height - paddingBottom);
          ctx.closePath();
          ctx.fill();

          // If peak completed, draw retention time label on top of peak
          if (currentTime > peakTimeSec + (peak.sigma * 2.5 * 60)) {
            const rx = paddingLeft + (peakTimeSec / maxTimeSec) * plotWidth;
            const ry = height - paddingBottom - (getDetectorSignalAtTime(peak.retentionTime, [peak], false) / maxSignalVal) * plotHeight - 10;
            
            ctx.fillStyle = theme === 'dark' ? '#38bdf8' : '#0284c7'; // Cyan RT label
            ctx.font = 'bold 10px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(`tR: ${peak.retentionTime.toFixed(2)}`, rx, Math.max(paddingTop + 10, ry));
            
            // Short line down to peak
            ctx.strokeStyle = theme === 'dark' ? '#38bdf8' : '#0284c7';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 2]);
            ctx.beginPath();
            ctx.moveTo(rx, Math.max(paddingTop + 12, ry + 2));
            ctx.lineTo(rx, ry + 10);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }
    });

    // Draw the active "scanning pen" vertical line
    if (isRunning && activePlotWidth > 0 && activePlotWidth < plotWidth) {
      const scannerX = paddingLeft + activePlotWidth;
      ctx.strokeStyle = '#ef4444'; // Red pen line
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(scannerX, paddingTop);
      ctx.lineTo(scannerX, height - paddingBottom);
      ctx.stroke();

      // Glowing dot at active position
      const liveSignal = getDetectorSignalAtTime(currentTime / 60, simulatedElution, true);
      const scannerY = height - paddingBottom - (liveSignal / maxSignalVal) * plotHeight;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.circle?.(scannerX, scannerY, 4) || ctx.arc(scannerX, scannerY, 4, 0, 2 * Math.PI);
      ctx.fill();
    }

  }, [currentTime, simulatedElution, maxTimeLimit, theme, isRunning, ovenMode]);

  // --- Overlay Comparison Chart Drawing ---
  useEffect(() => {
    if (!showCompareMode) return;
    const canvas = compareCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const paddingLeft = 60;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 40;

    const plotWidth = width - paddingLeft - paddingRight;
    const plotHeight = height - paddingTop - paddingBottom;

    // Draw background grid
    ctx.fillStyle = theme === 'dark' ? '#0f172a' : '#ffffff';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = theme === 'dark' ? '#334155' : '#e2e8f0';
    ctx.lineWidth = 1;

    // We can compare up to 2 runs selected
    const selectedSaved = savedRuns.filter(r => comparisonRuns.includes(r.id));
    
    // Find the max time limit of compared runs to properly scale X-axis
    let maxCompTime = 8; // Default minutes
    let maxCompSignal = 180; // Default microvolts
    
    selectedSaved.forEach(run => {
      // Find maximum retention time in run
      const runMaxRt = Math.max(...run.elutionTimes.map(e => e.rt), 5);
      if (runMaxRt * 1.2 > maxCompTime) {
        maxCompTime = Math.ceil(runMaxRt * 1.2);
      }
      // Find maximum signal height
      const runMaxHt = Math.max(...run.elutionTimes.map(e => e.height), 100);
      if (runMaxHt * 1.3 > maxCompSignal) {
        maxCompSignal = Math.round(runMaxHt * 1.3);
      }
    });

    // Draw X-Grid
    const gridCols = 10;
    for (let i = 0; i <= gridCols; i++) {
      const x = paddingLeft + (i / gridCols) * plotWidth;
      ctx.beginPath();
      ctx.moveTo(x, paddingTop);
      ctx.lineTo(x, height - paddingBottom);
      ctx.stroke();

      const labelTime = ((i / gridCols) * maxCompTime).toFixed(1);
      ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#475569';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${labelTime} min`, x, height - paddingBottom + 18);
    }

    // Draw Y-Grid
    const gridRows = 5;
    for (let i = 0; i <= gridRows; i++) {
      const y = paddingTop + (1 - i / gridRows) * plotHeight;
      ctx.beginPath();
      ctx.moveTo(paddingLeft, y);
      ctx.lineTo(width - paddingRight, y);
      ctx.stroke();

      const labelVoltage = Math.round((i / gridRows) * maxCompSignal);
      ctx.fillStyle = theme === 'dark' ? '#94a3b8' : '#475569';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText(`${labelVoltage} µV`, paddingLeft - 8, y + 3);
    }

    // Colors for comparison
    const colors = ['#f43f5e', '#3b82f6']; // Rose and Blue

    selectedSaved.forEach((run, index) => {
      ctx.strokeStyle = colors[index % colors.length];
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const sampleStep = 1.5;
      let first = true;

      // Re-create the elution curves using saved metadata to plot beautiful overlays!
      for (let px = 0; px <= plotWidth; px += sampleStep) {
        const fraction = px / plotWidth;
        const tMin = fraction * maxCompTime;
        
        // Recompute point value for specific run settings
        let signalVal = 25; // baseline
        // Add simulated temperature drift
        if (run.ovenMode === 'programmed') {
          signalVal += Math.min(1.0, tMin / maxCompTime) * 18;
        }

        // Add peaks
        run.elutionTimes.forEach(p => {
          if (p.height === 0) return;
          const sigma = 0.035 + p.rt * (run.carrierGas === 'H2' ? 0.012 : run.carrierGas === 'He' ? 0.020 : 0.038) * (1.6 / run.flowRate);
          const exponent = -Math.pow(tMin - p.rt, 2) / (2 * Math.pow(sigma, 2));
          signalVal += p.height * Math.exp(exponent);
        });

        const x = paddingLeft + px;
        const y = height - paddingBottom - (signalVal / maxCompSignal) * plotHeight;

        if (first) {
          ctx.moveTo(x, y);
          first = false;
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Label peaks on the comparison plot
      run.elutionTimes.forEach(p => {
        if (p.height === 0) return;
        const rx = paddingLeft + (p.rt / maxCompTime) * plotWidth;
        if (rx > paddingLeft && rx < width - paddingRight) {
          const ry = height - paddingBottom - (p.height / maxCompSignal) * plotHeight - 12;
          ctx.fillStyle = colors[index % colors.length];
          ctx.font = '9px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(`[${index + 1}] ${p.rt.toFixed(2)}`, rx, Math.max(paddingTop + 10, ry));
        }
      });
    });

    // Draw Legend
    ctx.fillStyle = theme === 'dark' ? 'rgba(30, 41, 59, 0.85)' : 'rgba(241, 245, 249, 0.85)';
    ctx.strokeStyle = theme === 'dark' ? '#475569' : '#cbd5e1';
    ctx.lineWidth = 1;
    ctx.fillRect(width - 240, paddingTop + 10, 210, 70);
    ctx.strokeRect(width - 240, paddingTop + 10, 210, 70);

    selectedSaved.forEach((run, index) => {
      const y = paddingTop + 28 + index * 24;
      ctx.fillStyle = colors[index % colors.length];
      ctx.fillRect(width - 230, y - 6, 15, 8);
      
      ctx.fillStyle = theme === 'dark' ? '#f1f5f9' : '#0f172a';
      ctx.font = 'bold 10px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`${t.runNo} ${run.name} (${run.carrierGas}, ${run.flowRate} mL/min)`, width - 205, y);
    });

  }, [showCompareMode, comparisonRuns, savedRuns, theme, lang]);

  // --- Run Controls ---
  const handleInjectRun = () => {
    if (isRunning || isInjecting) return;
    
    setIsInjecting(true);
    setCurrentTime(0);
    setIsCompleted(false);

    // Simulated 1.5 seconds injection/vaporization lag
    setTimeout(() => {
      setIsInjecting(false);
      setIsRunning(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsInjecting(false);
    setIsCompleted(false);
    setCurrentTime(0);
    setQuizChecked(false);
  };

  const handleSaveRun = () => {
    if (!isCompleted) return;
    const runName = `${selectedSample.name[lang]} - ${selectedColumnId === 'polar' ? 'Polar' : 'Non-Polar'} (${selectedDetectorId})`;
    const newRun: SavedRun = {
      id: `run_${Date.now()}`,
      name: runName,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sampleId: selectedSampleId,
      detectorId: selectedDetectorId,
      columnId: selectedColumnId,
      ovenMode: ovenMode,
      carrierGas: carrierGas,
      flowRate: flowRate,
      isothermalTemp: isothermalTemp,
      initialTemp: initialTemp,
      rampRate: rampRate,
      finalTemp: finalTemp,
      elutionTimes: simulatedElution.map(p => ({
        compoundId: p.compound.id,
        rt: p.retentionTime,
        height: p.height,
        area: p.area,
        resolution: p.resolution
      })),
      rawCurvePoints: []
    };
    setSavedRuns(prev => [newRun, ...prev]);
    // Automatically select for comparison if list is small
    if (comparisonRuns.length < 2) {
      setComparisonRuns(prev => [...prev, newRun.id]);
    }
  };

  const handleClearLog = () => {
    setSavedRuns([]);
    setComparisonRuns([]);
    setShowCompareMode(false);
  };

  // --- Quiz Mode Functions ---
  const handleQuizMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...predictedOrder];
    const temp = updated[index];
    updated[index] = updated[index - 1];
    updated[index - 1] = temp;
    setPredictedOrder(updated);
  };

  const handleQuizMoveDown = (index: number) => {
    if (index === predictedOrder.length - 1) return;
    const updated = [...predictedOrder];
    const temp = updated[index];
    updated[index] = updated[index + 1];
    updated[index + 1] = temp;
    setPredictedOrder(updated);
  };

  const handleCheckQuizResult = () => {
    // Determine actual elution order of compounds
    const actualOrder = [...simulatedElution]
      .filter(p => p.height > 0) // only count responsive compounds
      .map(p => p.compound.id);

    // If some compounds are non-responsive for this detector, they have 0 height
    // We should only compare responsive compounds. But to be simple, let's compare all compounds
    // ranked correctly.
    const sortedActualAll = [...simulatedElution]
      .map(p => p.compound.id);

    // Check if predicted matches actual
    const isCorrect = predictedOrder.length === sortedActualAll.length && 
      predictedOrder.every((id, idx) => id === sortedActualAll[idx]);

    setQuizChecked(true);
    setQuizSuccess(isCorrect);

    if (isCorrect) {
      setHasCompletedQuizSuccessfully(true);
    }
  };

  // --- Export Results (Excel/CSV and beautiful Print layout) ---
  const handleExportCsv = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    // Header
    csvContent += `${t.compound},${t.formula},${t.boilingPoint}(C),${t.polarity},${t.retentionTime}(min),${t.peakHeight}(uV),${t.peakArea}(uV.s),${t.resolution}\n`;
    
    simulatedElution.forEach(peak => {
      csvContent += `"${peak.compound.name[lang]}","${peak.compound.formula}",${peak.compound.boilingPoint},${peak.compound.polarity},${peak.retentionTime.toFixed(4)},${peak.height.toFixed(2)},${peak.area.toFixed(2)},${peak.resolution}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `GC_Analysis_${selectedSampleId}_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintReport = () => {
    window.print();
  };

  // --- Additional Welcome State ---
  const [studentRole, setStudentRole] = useState<'student' | 'graduate' | 'professor'>('student');

  if (showWelcome) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center p-4 md:p-8 transition-colors duration-300 relative ${theme === 'dark' ? 'bg-[#0a0f1d] text-[#e2e8f0]' : 'bg-[#fcfbf9] text-[#1e2431]'}`}>
        
        {/* Decorative Ambient Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        
        {/* Top Header Bar for Language and Theme Selection */}
        <div className="w-full max-w-5xl flex justify-between items-center mb-6 z-10">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest opacity-60">GC.REAL_PHYSICS.V2.0</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Language Selection */}
            <div className="relative">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className={`appearance-none rounded-lg px-3 py-1.5 pr-8 text-xs font-bold border shadow-sm focus:outline-none cursor-pointer ${theme === 'dark' ? 'bg-[#131b2e] border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-800'}`}
              >
                <option value="ar">العربية (AR)</option>
                <option value="en">English (EN)</option>
                <option value="es">Español (ES)</option>
                <option value="de">Deutsch (DE)</option>
              </select>
              <div className={`absolute inset-y-0 pointer-events-none flex items-center px-2 text-[#94a3b8] ${isRtl ? 'left-1' : 'right-1'}`}>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              className={`rounded-lg p-1.5 border shadow-sm transition-all cursor-pointer ${theme === 'dark' ? 'bg-[#131b2e] border-slate-700 text-yellow-400 hover:bg-[#1a253e]' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              title={theme === 'dark' ? t.dayMode : t.nightMode}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Welcome Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`w-full max-w-5xl rounded-3xl border shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 ${theme === 'dark' ? 'bg-[#131b2e]/90 border-slate-800' : 'bg-white/95 border-slate-200'}`}
        >
          {/* Left Column: Emblem Banner */}
          <div className={`lg:col-span-5 p-8 md:p-12 flex flex-col items-center justify-center text-center relative overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-b from-[#18233c] to-[#0e1626]' : 'bg-gradient-to-b from-slate-50 to-slate-100/60'}`}>
            <div className="absolute w-44 h-44 rounded-full bg-emerald-500/5 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <motion.div 
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="relative cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <AssociationLogo className="h-44 w-44 drop-shadow-xl" />
            </motion.div>
            
            <div className="mt-6 space-y-2 z-10">
              <h2 className="text-lg font-black tracking-tight leading-snug text-amber-500">
                {lang === 'ar' ? 'الهيئة العامة للمهندسين الكيميائيين' : 'The General Association of Chemical Engineers'}
              </h2>
              <p className="text-[11px] font-extrabold tracking-widest text-[#94a3b8]">
                {lang === 'ar' ? 'فرع البصرة • العراق' : 'Basra Branch • Iraq'}
              </p>
              
              <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-4" />
              
              <p className={`text-[11px] leading-relaxed max-w-xs mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {lang === 'ar' 
                  ? 'منصة وطنية متقدمة لرعاية وتأهيل الكوادر الهندسية والطلابية، وتمكين المهندسين من محاكاة العمليات التحليلية بدقة فيزيائية متكاملة.'
                  : 'An advanced national platform for training engineering student and graduate talents, simulating refinery analytics with strict mathematical precision.'}
              </p>
            </div>

            {/* Colleges tags */}
            <div className="mt-8 flex flex-col gap-1.5 w-full max-w-xs z-10">
              <span className={`text-[10px] font-bold py-2 rounded-lg border text-center ${theme === 'dark' ? 'bg-[#1c2a45]/80 border-slate-700 text-emerald-400' : 'bg-emerald-50 border-emerald-100 text-emerald-800'}`}>
                {t.college1}
              </span>
              <span className={`text-[10px] font-bold py-2 rounded-lg border text-center ${theme === 'dark' ? 'bg-[#1c2a45]/80 border-slate-700 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-800'}`}>
                {t.college2}
              </span>
            </div>
          </div>

          {/* Right Column: Portal form & dynamic role customization */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="space-y-1.5">
                <span className="text-[9px] font-black text-amber-500 tracking-widest uppercase bg-amber-500/10 px-2.5 py-1 rounded-md">
                  {lang === 'ar' ? 'البوابة الترحيبية للكوادر التعليمية' : 'OFFICIAL ACADEMIC GREETING'}
                </span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug">
                  {lang === 'ar' 
                    ? 'أهلاً بك في مختبر المحاكاة الكروماتوغرافية' 
                    : 'Welcome to the Gas Chromatography Simulation Lab'}
                </h3>
                <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lang === 'ar'
                    ? 'يرجى إدخال بياناتك المهنية لتخصيص بيئة المحاكاة وتهيئة شهادة التميز الأكاديمي.'
                    : 'Please submit your academic credentials to personalize your laboratory workspace and prepare your certification.'}
                </p>
              </div>

              {/* Role select tabs */}
              <div className="space-y-2">
                <label className="text-[11px] font-extrabold text-[#94a3b8] block">
                  {lang === 'ar' ? 'حدد صفتك الأكاديمية / المهنية:' : 'Select your Academic / Professional Status:'}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'student', title: lang === 'ar' ? 'طالب' : 'Student', icon: BookOpen },
                    { id: 'graduate', title: lang === 'ar' ? 'خريج' : 'Graduate', icon: GraduationCap },
                    { id: 'professor', title: lang === 'ar' ? 'أستاذ / دكتور' : 'Faculty / Dr.', icon: Users },
                  ].map((role) => {
                    const Icon = role.icon;
                    const active = studentRole === role.id;
                    return (
                      <button
                        key={role.id}
                        onClick={() => setStudentRole(role.id as any)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          active 
                            ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-sm' 
                            : theme === 'dark' 
                              ? 'bg-[#18233c]/40 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white' 
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <Icon className="h-5 w-5 mb-1" />
                        <span className="text-[10px] font-extrabold">{role.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input forms */}
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-extrabold text-[#94a3b8] mb-1 block">
                    {lang === 'ar' ? 'الاسم الثلاثي الكامل (يُطبع على الشهادة):' : 'Full Triple Name (Printed on Certificate):'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ar' ? 'مثال: د. علي سيف الدين حيدر' : 'e.g., Ali Saif AlDeen Haider'}
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className={`w-full rounded-xl px-4 py-3 text-xs border font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all ${
                      theme === 'dark' 
                        ? 'bg-[#18233c]/50 border-slate-800 text-white focus:border-amber-500 focus:bg-[#18233c]' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-amber-500 focus:bg-white'
                    }`}
                  />
                </div>

                <div>
                  <label className="text-[11px] font-extrabold text-[#94a3b8] mb-1 block">
                    {lang === 'ar' ? 'الكلية التابع لها:' : 'Affiliated College / Institute:'}
                  </label>
                  <select
                    value={studentCollege}
                    onChange={(e) => setStudentCollege(e.target.value)}
                    className={`w-full rounded-xl px-4 py-3 text-xs border font-bold focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all ${
                      theme === 'dark' 
                        ? 'bg-[#18233c]/50 border-slate-800 text-white focus:border-amber-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-amber-500'
                    }`}
                  >
                    <option value="college1">{translations[lang].college1}</option>
                    <option value="college2">{translations[lang].college2}</option>
                  </select>
                </div>
              </div>

              {/* Specific guidelines banner based on selected role */}
              <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                theme === 'dark' ? 'bg-[#0e1626]/50 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <p className="font-extrabold text-emerald-500 mb-1 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>
                    {studentRole === 'student' && (lang === 'ar' ? 'ركن الطلبة (Students Portal):' : 'Student Hub:')}
                    {studentRole === 'graduate' && (lang === 'ar' ? 'ركن الخريجين (Graduates Hub):' : 'Graduates Corner:')}
                    {studentRole === 'professor' && (lang === 'ar' ? 'ركن الأساتذة والدكاترة (Faculty Hub):' : 'Faculty Circle:')}
                  </span>
                </p>
                <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {studentRole === 'student' && (lang === 'ar' 
                    ? 'يمكنك تفعيل "وضع التمرين" لاختبار معلوماتك وتوقع الترتيب الفيزيائي لخروج المركبات قبل تشغيل المحاكمة العملية للفوز بشهادة التميز المعتمدة.'
                    : 'Activate "Quiz Mode" to predict compound elution sequence before running the simulated columns. Ace the test to claim your formal certificate.')}
                  {studentRole === 'graduate' && (lang === 'ar' 
                    ? 'منصة متميزة لمقارنة سلوك الكواشف وفصل العينات البترولية المعقدة وحفظ السجلات، مع إمكانية طباعة تقارير PDF متكاملة لتقديمها للجهات المعنية.'
                    : 'Compare detector selectivities, run crude oils, save runs, and export high-resolution PDF chromatography reports ready for presentation.')}
                  {studentRole === 'professor' && (lang === 'ar' 
                    ? 'نوفر لكم تحكماً متقدماً في معاملات الديناميكا الحرارية ومعادلات تسخين الفرن وإحصائيات القمم، لتيسير توضيح وشرح نظريات الفصل للطلبة.'
                    : 'Access precise oven ramp models, flow dynamics, and resolution factors, perfect for illustrating thermodynamic concepts in lectures.')}
                </p>
              </div>

            </div>

            {/* Launch Action */}
            <div className="pt-6 border-t border-[#334155]/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-right sm:text-right w-full sm:w-auto">
                <p className="text-[10px] text-slate-400">{lang === 'ar' ? 'مستوى المحاكاة' : 'SIMULATION RESOLUTION'}</p>
                <p className="text-xs font-bold text-amber-500">{lang === 'ar' ? 'نموذج فيزيائي كيميائي متكامل' : 'High-Fidelity Physicochemical Model'}</p>
              </div>

              <button
                onClick={() => setShowWelcome(false)}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl text-xs font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{lang === 'ar' ? 'الدخول للمختبر وبدء التحليل' : 'Enter Lab & Start Analysis'}</span>
                {isRtl ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </button>
            </div>

          </div>
        </motion.div>
        
        {/* Footer info line */}
        <div className="mt-8 text-center text-[9px] font-mono opacity-40 space-y-1">
          <p>{t.developer} | All Rights Reserved © 2026</p>
          <p>Certified by G&OT Engineering Standards, Basra Branch</p>
        </div>

      </div>
    );
  }

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0a0f1d] text-[#e2e8f0]' : 'bg-[#fcfbf9] text-[#1e2431]'}`}>
      
      {/* ================= HEADER BRANDING ================= */}
      <header className={`border-b px-4 py-4 md:px-8 transition-colors ${theme === 'dark' ? 'bg-[#131b2e] border-slate-800' : 'bg-white border-[#e2e8f0]'}`}>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          
          {/* Basra Association Emblem Logo */}
          <div className="flex items-center gap-3">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl p-1 shadow-lg cursor-pointer hover:scale-105 transition-all ${theme === 'dark' ? 'bg-[#18233c]' : 'bg-slate-50'}`} onClick={() => setShowWelcome(true)} title="العودة لبوابة الترحيب">
              <AssociationLogo className="h-full w-full" />
            </div>
            
            <div className={isRtl ? 'text-right' : 'text-left'}>
              <h1 className={`text-sm md:text-base font-extrabold tracking-wide ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {t.association}
              </h1>
              <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-[#94a3b8]">
                <span className="font-semibold text-emerald-500">{t.college1}</span>
                <span className="hidden md:inline">•</span>
                <span className="font-semibold text-blue-500">{t.college2}</span>
              </div>
            </div>
          </div>

          {/* Center Info (Developer and Team Credit) */}
          <div className="hidden lg:flex flex-col items-center justify-center text-center">
            <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">
              GC Chemical Engineering Simulator
            </p>
            <p className="text-xs text-[#94a3b8] font-mono">
              {t.developer}
            </p>
          </div>

          {/* Right Header: Languages, Themes, Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Back to welcome button */}
            <button
              onClick={() => setShowWelcome(true)}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 border text-xs font-bold shadow-sm transition-all cursor-pointer ${theme === 'dark' ? 'bg-[#18233c] border-slate-800 text-amber-400 hover:bg-[#1f2d4f]' : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'}`}
              title="البوابة الترحيبية"
            >
              <Users className="h-4 w-4" />
              <span className="hidden md:inline">{lang === 'ar' ? 'البوابة الترحيبية' : 'Welcome Portal'}</span>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <select 
                value={lang} 
                onChange={(e) => setLang(e.target.value)}
                className={`appearance-none rounded-lg px-3 py-1.5 pr-8 text-xs font-medium border shadow-sm focus:outline-none cursor-pointer ${theme === 'dark' ? 'bg-[#18233c] border-slate-800 text-white' : 'bg-white border-[#cbd5e1] text-slate-800'}`}
              >
                <option value="ar">العربية (AR)</option>
                <option value="en">English (EN)</option>
                <option value="es">Español (ES)</option>
                <option value="de">Deutsch (DE)</option>
              </select>
              <div className={`absolute inset-y-0 pointer-events-none flex items-center px-2 text-[#94a3b8] ${isRtl ? 'left-1' : 'right-1'}`}>
                <ChevronDown className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              className={`rounded-lg p-1.5 border shadow-sm transition-all cursor-pointer ${theme === 'dark' ? 'bg-[#18233c] border-slate-800 text-yellow-400 hover:bg-[#1a253e]' : 'bg-white border-[#cbd5e1] text-slate-600 hover:bg-slate-50'}`}
              title={theme === 'dark' ? t.dayMode : t.nightMode}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Guide Button */}
            <button 
              onClick={() => setShowGuide(true)}
              className={`flex items-center gap-1 rounded-lg px-2.5 py-1.5 border text-xs font-semibold shadow-sm transition-all cursor-pointer ${theme === 'dark' ? 'bg-[#18233c] border-slate-800 text-emerald-400 hover:bg-emerald-950/20' : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100'}`}
            >
              <HelpCircle className="h-4 w-4" />
              <span>؟</span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Developer Credit (visible on smaller screens) */}
      <div className={`block lg:hidden text-center py-1.5 border-b text-[10px] font-mono tracking-tight transition-colors ${theme === 'dark' ? 'bg-[#0f1420] border-slate-800 text-[#94a3b8]' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
        {t.developer} | {t.college1} &amp; {t.college2}
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8">
        
        {/* Subtitle description card */}
        <div className={`mb-6 p-4 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all shadow-sm ${theme === 'dark' ? 'bg-[#131a26] border-[#1e293b]' : 'bg-white border-[#cbd5e1]'}`}>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-emerald-500">{t.title}</h2>
            <p className="text-xs text-[#94a3b8]">{t.subtitle}</p>
          </div>
          
          {/* Certificate Badge Shortcut */}
          {hasCompletedQuizSuccessfully && (
            <button
              onClick={() => setShowCertificate(true)}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:from-amber-600 hover:to-amber-700 transition-all cursor-pointer animate-pulse"
            >
              <Award className="h-4 w-4" />
              <span>{t.downloadCertificate}</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* ================= LEFT / CONTROL SIDEBAR (lg:col-span-4) ================= */}
          <section className="lg:col-span-4 space-y-6">
            
            {/* Section 1: Chemical & Sample Selection */}
            <div className={`p-5 rounded-2xl border shadow-sm transition-all ${theme === 'dark' ? 'bg-[#151c2c] border-[#1e293b]' : 'bg-white border-[#cbd5e1]'}`}>
              <div className="mb-4 flex items-center gap-2 border-b pb-3 border-[#334155]/30">
                <Database className="h-5 w-5 text-blue-500" />
                <h3 className="font-bold text-sm tracking-wide">{t.sample}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#94a3b8]">{t.sample}</label>
                  <select
                    value={selectedSampleId}
                    onChange={(e) => {
                      setSelectedSampleId(e.target.value);
                      handleReset();
                    }}
                    disabled={isRunning || isInjecting}
                    className={`w-full rounded-lg px-3 py-2 text-xs border font-semibold focus:outline-none transition-all ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white focus:border-blue-500' : 'bg-slate-50 border-[#cbd5e1] text-slate-800 focus:border-blue-500'}`}
                  >
                    {SAMPLES.map(sample => (
                      <option key={sample.id} value={sample.id}>{sample.name[lang]}</option>
                    ))}
                  </select>
                </div>

                <div className={`p-3 rounded-lg text-xs leading-relaxed ${theme === 'dark' ? 'bg-[#0f172a] text-[#94a3b8]' : 'bg-slate-50 text-slate-600'}`}>
                  {selectedSample.description[lang]}
                </div>

                {/* Show chemical components breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold text-[#94a3b8]">
                    <span>{t.compound}</span>
                    <span>{t.boilingPoint} / {t.polarity}</span>
                  </div>
                  <div className="max-h-36 overflow-y-auto space-y-1 pr-1 border border-[#334155]/20 rounded-md p-1.5 bg-[#0b0f19]/40">
                    {selectedSample.compounds.map(c => (
                      <div key={c.id} className="flex justify-between text-xs py-1 px-1.5 rounded bg-slate-500/5 hover:bg-slate-500/10">
                        <span className="font-medium">{c.name[lang]} <span className="text-[10px] text-slate-400 font-mono">({c.formula})</span></span>
                        <span className="font-mono text-[11px] text-amber-500">{c.boilingPoint}°C / P:{c.polarity.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Gas Chromatograph Core Settings */}
            <div className={`p-5 rounded-2xl border shadow-sm transition-all ${theme === 'dark' ? 'bg-[#151c2c] border-[#1e293b]' : 'bg-white border-[#cbd5e1]'}`}>
              <div className="mb-4 flex items-center gap-2 border-b pb-3 border-[#334155]/30">
                <Settings className="h-5 w-5 text-emerald-500" />
                <h3 className="font-bold text-sm tracking-wide">إعدادات جهاز الفصل والتشغيل</h3>
              </div>

              <div className="space-y-4">
                
                {/* Carrier Gas & Flow Rate */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-[#94a3b8]">{t.carrierGas}</label>
                    <select
                      value={carrierGas}
                      onChange={(e) => setCarrierGas(e.target.value)}
                      disabled={isRunning || isInjecting}
                      className={`w-full rounded-lg px-2.5 py-1.5 text-xs border font-bold focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-slate-50 border-[#cbd5e1]'}`}
                    >
                      <option value="He">Helium (He)</option>
                      <option value="H2">Hydrogen (H2)</option>
                      <option value="N2">Nitrogen (N2)</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-[11px] font-bold text-[#94a3b8]">
                      {t.flowRate}
                    </label>
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min="0.5"
                        max="4.0"
                        step="0.1"
                        value={flowRate}
                        disabled={isRunning || isInjecting}
                        onChange={(e) => setFlowRate(Number(e.target.value))}
                        className={`w-full rounded-lg px-2 py-1 text-xs font-mono border focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-slate-50 border-[#cbd5e1]'}`}
                      />
                      <span className="text-[10px] text-slate-400">mL/m</span>
                    </div>
                  </div>
                </div>

                {/* Column Selection */}
                <div>
                  <label className="mb-1 block text-xs font-bold text-[#94a3b8]">{t.columnType}</label>
                  <select
                    value={selectedColumnId}
                    onChange={(e) => setSelectedColumnId(e.target.value)}
                    disabled={isRunning || isInjecting}
                    className={`w-full rounded-lg px-3 py-2 text-xs border font-bold focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-slate-50 border-[#cbd5e1]'}`}
                  >
                    <option value="non_polar">Non-Polar column (DB-5: 5% Phenyl-95% Methylpolysiloxane)</option>
                    <option value="polar">Polar column (Carbowax: Polyethylene Glycol)</option>
                  </select>
                </div>

                {/* Oven Heating Profile */}
                <div className={`p-3 rounded-xl border space-y-3 ${theme === 'dark' ? 'bg-[#0f172a] border-[#334155]/50' : 'bg-slate-50 border-[#cbd5e1]/50'}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                      <Thermometer className="h-4 w-4" />
                      <span>{t.ovenMode}</span>
                    </span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => setOvenMode('isothermal')}
                        disabled={isRunning || isInjecting}
                        className={`rounded-md px-2 py-1 text-[10px] font-bold ${ovenMode === 'isothermal' ? 'bg-amber-500 text-white' : 'bg-slate-500/10 text-[#94a3b8] hover:bg-slate-500/20'}`}
                      >
                        Isothermal
                      </button>
                      <button
                        onClick={() => setOvenMode('programmed')}
                        disabled={isRunning || isInjecting}
                        className={`rounded-md px-2 py-1 text-[10px] font-bold ${ovenMode === 'programmed' ? 'bg-amber-500 text-white' : 'bg-slate-500/10 text-[#94a3b8] hover:bg-slate-500/20'}`}
                      >
                        Programmed
                      </button>
                    </div>
                  </div>

                  {ovenMode === 'isothermal' ? (
                    <div>
                      <div className="flex justify-between text-[11px] text-[#94a3b8] mb-1">
                        <span>{t.ovenTemp}</span>
                        <span className="font-mono text-amber-500">{isothermalTemp}°C</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="280"
                        value={isothermalTemp}
                        disabled={isRunning || isInjecting}
                        onChange={(e) => setIsothermalTemp(Number(e.target.value))}
                        className="w-full accent-amber-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs">
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <span className="block text-[10px] text-[#94a3b8]">{t.initialTemp}</span>
                          <input
                            type="number"
                            min="40"
                            max="120"
                            value={initialTemp}
                            disabled={isRunning || isInjecting}
                            onChange={(e) => setInitialTemp(Number(e.target.value))}
                            className={`w-full rounded px-1.5 py-1 text-xs font-mono border focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-white border-[#cbd5e1]'}`}
                          />
                        </div>
                        <div>
                          <span className="block text-[10px] text-[#94a3b8]">{t.rampRate}</span>
                          <input
                            type="number"
                            min="2"
                            max="40"
                            value={rampRate}
                            disabled={isRunning || isInjecting}
                            onChange={(e) => setRampRate(Number(e.target.value))}
                            className={`w-full rounded px-1.5 py-1 text-xs font-mono border focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-white border-[#cbd5e1]'}`}
                          />
                        </div>
                        <div>
                          <span className="block text-[10px] text-[#94a3b8]">{t.finalTemp}</span>
                          <input
                            type="number"
                            min="150"
                            max="300"
                            value={finalTemp}
                            disabled={isRunning || isInjecting}
                            onChange={(e) => setFinalTemp(Number(e.target.value))}
                            className={`w-full rounded px-1.5 py-1 text-xs font-mono border focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-white border-[#cbd5e1]'}`}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Detector Selection */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-xs font-bold text-[#94a3b8]">{t.detector}</label>
                    <span className="text-[10px] text-amber-500 font-bold">{selectedDetectorId}</span>
                  </div>
                  <select
                    value={selectedDetectorId}
                    onChange={(e) => setSelectedDetectorId(e.target.value)}
                    disabled={isRunning || isInjecting}
                    className={`w-full rounded-lg px-3 py-2 text-xs border font-bold focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-slate-50 border-[#cbd5e1]'}`}
                  >
                    <option value="FID">FID - Flame Ionization Detector (Hydrocarbons)</option>
                    <option value="TCD">TCD - Thermal Conductivity Detector (Universal)</option>
                    <option value="ECD">ECD - Electron Capture Detector (Halogens/Nitro)</option>
                    <option value="NPD">NPD - Nitrogen-Phosphorus Detector</option>
                    <option value="FPD">FPD - Flame Photometric Detector (Sulfur/Phosphorus)</option>
                  </select>
                  <p className="mt-1.5 text-[10px] text-[#94a3b8] leading-tight font-sans">
                    {selectedDetectorId === 'FID' && t.infoFid}
                    {selectedDetectorId === 'TCD' && t.infoTcd}
                    {selectedDetectorId === 'ECD' && t.infoEcd}
                    {selectedDetectorId === 'NPD' && t.infoNpd}
                    {selectedDetectorId === 'FPD' && t.infoFpd}
                  </p>
                </div>

              </div>
            </div>

          </section>

          {/* ================= RIGHT / SCREEN & RESULTS AREA (lg:col-span-8) ================= */}
          <section className="lg:col-span-8 space-y-6">

            {/* 1. Real-time Visual Monitor (The GC Screen) */}
            <div className={`p-5 rounded-2xl border shadow-md transition-all ${theme === 'dark' ? 'bg-[#151c2c] border-[#1e293b]' : 'bg-white border-[#cbd5e1]'}`}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b pb-3 border-[#334155]/30">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-emerald-500 animate-pulse" />
                  <span className="font-bold text-sm">شاشة المراقبة الكروماتوغرافية والتحليل</span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Simulation speed multiplier */}
                  <div className="flex items-center rounded-lg bg-[#0b0f19] p-1 border border-[#334155]/30">
                    <span className="px-1.5 text-[10px] text-slate-400">السرعة:</span>
                    {[1, 5, 10, 20].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSimSpeed(s)}
                        className={`rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${simSpeed === s ? 'bg-emerald-500 text-white' : 'text-[#94a3b8] hover:bg-[#1e293b]'}`}
                      >
                        {s}x
                      </button>
                    ))}
                  </div>

                  {/* Mode Selector */}
                  <button
                    onClick={() => {
                      setIsQuizMode(prev => !prev);
                      handleReset();
                    }}
                    disabled={isRunning || isInjecting}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all shadow-sm ${isQuizMode ? 'bg-amber-500 text-white' : 'bg-slate-500/10 text-[#94a3b8] hover:bg-slate-500/20'}`}
                  >
                    <Award className="h-3.5 w-3.5" />
                    <span>{isQuizMode ? t.quizMode : t.normalMode}</span>
                  </button>
                </div>
              </div>

              {/* LIVE VIEW CONTAINER */}
              <div className="space-y-4">
                
                {/* Active Column / Gas / Temperature Flow Diagram */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 p-3 rounded-xl text-center text-xs ${theme === 'dark' ? 'bg-[#0f172a]' : 'bg-slate-100'}`}>
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">{t.carrierGas}</span>
                    <span className="font-bold text-blue-400 flex items-center justify-center gap-1">
                      <Wind className="h-3.5 w-3.5" />
                      {carrierGas} ({flowRate.toFixed(1)} mL/min)
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">{t.columnType}</span>
                    <span className="font-bold text-emerald-400 flex items-center justify-center gap-1">
                      <Columns className="h-3.5 w-3.5" />
                      {selectedColumnId === 'polar' ? 'Polar (Carbowax)' : 'Non-Polar (DB-5)'}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">درجة الحرارة الحالية</span>
                    <span className="font-bold text-amber-500 flex items-center justify-center gap-1 font-mono">
                      <Thermometer className="h-3.5 w-3.5" />
                      {ovenMode === 'isothermal' 
                        ? `${isothermalTemp}°C` 
                        : `${Math.min(finalTemp, initialTemp + (rampRate * (currentTime / 60))).toFixed(1)}°C`
                      }
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 mb-0.5">حالة النظام</span>
                    <span className={`font-bold uppercase ${isRunning ? 'text-emerald-500 animate-pulse' : isCompleted ? 'text-blue-500' : 'text-slate-400'}`}>
                      {isInjecting ? t.injecting : isRunning ? t.running : isCompleted ? t.completed : 'جاهز للحقن'}
                    </span>
                  </div>
                </div>

                {/* THE CANVAS */}
                <div className="relative border rounded-xl overflow-hidden border-[#334155]/40 shadow-inner">
                  
                  {/* Overlay injecting screen */}
                  {isInjecting && (
                    <div className="absolute inset-0 bg-slate-900/80 flex flex-col items-center justify-center z-10 text-white">
                      <RefreshCw className="h-8 w-8 text-emerald-400 animate-spin mb-2" />
                      <p className="text-sm font-bold tracking-widest uppercase">{t.injecting}</p>
                    </div>
                  )}

                  <canvas 
                    ref={canvasRef} 
                    width={700} 
                    height={280} 
                    className="w-full h-auto block"
                  />
                  
                  {/* Timer display on chart */}
                  <div className="absolute top-3 right-3 rounded-md bg-black/75 px-3 py-1 font-mono text-xs text-emerald-400 flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>{Math.floor(currentTime / 60)}m : {(currentTime % 60).toFixed(0)}s</span>
                    <span className="text-[10px] text-slate-400">/ {maxTimeLimit}m</span>
                  </div>
                </div>

                {/* RUN CONTROL BUTTONS */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex gap-2">
                    <button
                      onClick={handleInjectRun}
                      disabled={isRunning || isInjecting}
                      className="flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-md cursor-pointer"
                    >
                      <Flame className="h-4 w-4" />
                      <span>{t.inject}</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="flex items-center gap-1 rounded-lg border border-slate-600 px-4 py-2.5 text-xs font-semibold hover:bg-slate-500/10 transition-all cursor-pointer"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>{t.reset}</span>
                    </button>
                  </div>

                  {isCompleted && (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveRun}
                        className="flex items-center gap-1 rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-bold text-white transition-all shadow cursor-pointer"
                      >
                        <Layers className="h-3.5 w-3.5" />
                        <span>{t.saveRun}</span>
                      </button>

                      <button
                        onClick={handleExportCsv}
                        className="flex items-center gap-1 rounded-lg border border-slate-600 px-4 py-2 text-xs font-semibold hover:bg-slate-500/10 transition-all cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>{t.exportCsv}</span>
                      </button>

                      <button
                        onClick={handlePrintReport}
                        className="flex items-center gap-1 rounded-lg bg-slate-700 hover:bg-slate-600 px-4 py-2 text-xs font-bold text-white transition-all cursor-pointer"
                      >
                        <Printer className="h-3.5 w-3.5" />
                        <span>{t.exportPdf}</span>
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* 2. Quiz / Training Panel (Active only in Quiz Mode) */}
            {isQuizMode && (
              <div className={`p-5 rounded-2xl border border-amber-500/40 shadow-lg bg-gradient-to-br transition-all ${theme === 'dark' ? 'from-[#1e1e30] to-[#151525]' : 'from-amber-50/20 to-white'}`}>
                <div className="mb-4 flex items-center justify-between border-b pb-3 border-amber-500/20">
                  <div className="flex items-center gap-2 text-amber-500">
                    <Award className="h-5 w-5 animate-bounce" />
                    <h3 className="font-extrabold text-sm tracking-wide">{t.quizMode}</h3>
                  </div>
                  {quizChecked && (
                    <span className={`rounded px-2 py-0.5 text-xs font-bold ${quizSuccess ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                      {quizSuccess ? 'ناجح' : 'حاول مرة أخرى'}
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {t.quizIntro}
                  </p>

                  {/* Prediction arranging container */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    {/* Compound list to rank */}
                    <div className="space-y-2">
                      {predictedOrder.map((id, index) => {
                        const comp = selectedSample.compounds.find(c => c.id === id);
                        if (!comp) return null;
                        return (
                          <div 
                            key={id} 
                            className={`flex items-center justify-between p-3 rounded-lg border text-xs shadow-sm transition-all ${theme === 'dark' ? 'bg-[#0f172a] border-[#334155]' : 'bg-slate-50 border-[#cbd5e1]'}`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="flex h-5 w-5 items-center justify-center rounded bg-amber-500/10 text-amber-500 font-bold text-xs">
                                {index + 1}
                              </span>
                              <div>
                                <p className="font-bold text-xs">{comp.name[lang]}</p>
                                <p className="text-[10px] text-slate-400">BP: {comp.boilingPoint}°C | Pol: {comp.polarity.toFixed(1)}</p>
                              </div>
                            </div>

                            {/* Reordering arrows */}
                            <div className="flex gap-1">
                              <button 
                                onClick={() => handleQuizMoveUp(index)}
                                disabled={index === 0}
                                className="p-1 rounded hover:bg-slate-500/20 disabled:opacity-30 text-slate-400"
                              >
                                ▲
                              </button>
                              <button 
                                onClick={() => handleQuizMoveDown(index)}
                                disabled={index === predictedOrder.length - 1}
                                className="p-1 rounded hover:bg-slate-500/20 disabled:opacity-30 text-slate-400"
                              >
                                ▼
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanatory visual cues */}
                    <div className={`p-4 rounded-xl border text-xs space-y-2 ${theme === 'dark' ? 'bg-[#0f172a]/50 border-slate-800' : 'bg-amber-50/10 border-slate-200'}`}>
                      <h4 className="font-bold text-amber-500 flex items-center gap-1.5">
                        <Info className="h-4 w-4" />
                        <span>توجيهات حل تمرين الفصل:</span>
                      </h4>
                      <ul className="list-disc list-inside space-y-1.5 text-[#94a3b8] leading-relaxed pr-2">
                        <li>
                          <strong>تأثير درجات الغليان:</strong> المركبات ذات الغليان الأقل تفضل التطاير وتخرج أسرع على الأعمدة غير القطبية.
                        </li>
                        <li>
                          <strong>تأثير قطبية العمود:</strong> إذا كان العمود <strong>قطبي (Polar)</strong>، فإن الجاذبية القطبية ستعيق المركبات القطبية (مثل الكحولات) لتخرج لاحقاً مقارنة بمثيلاتها.
                        </li>
                        <li>
                          <strong>تأثير الكاشف:</strong> تأكد أن الكاشف المختار حساس لجميع المركبات، فالمركب الذي لا يعطي إشارة لن يظهر كقمة!
                        </li>
                      </ul>
                    </div>

                  </div>

                  {/* Actions for Quiz */}
                  <div className="flex flex-wrap gap-2 items-center justify-between border-t pt-3 border-amber-500/20">
                    <button
                      onClick={handleCheckQuizResult}
                      disabled={isRunning || isInjecting}
                      className="rounded-lg bg-amber-500 hover:bg-amber-600 disabled:opacity-50 px-5 py-2 text-xs font-bold text-white transition-all shadow"
                    >
                      {t.quizCheckResult}
                    </button>

                    {quizChecked && (
                      <div className="flex items-center gap-1.5 text-xs">
                        {quizSuccess ? (
                          <div className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>{t.quizCorrect}</span>
                          </div>
                        ) : (
                          <div className="text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            <span>{t.quizIncorrect}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Success certificate form */}
                  {quizChecked && quizSuccess && (
                    <div className={`mt-4 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-3`}>
                      <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-1.5">
                        <CertificateIcon className="h-5 w-5 animate-pulse" />
                        <span>{t.quizSuccessTitle}</span>
                      </h4>
                      <p className="text-xs text-[#94a3b8] leading-relaxed">
                        {t.quizSuccessDesc}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                        <div>
                          <label className="block text-[11px] text-[#94a3b8] mb-1 font-bold">{t.studentNameLabel}</label>
                          <input
                            type="text"
                            placeholder={t.studentNamePlaceholder}
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className={`w-full rounded-lg px-3 py-1.5 text-xs border focus:outline-none focus:border-emerald-500 ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-white border-[#cbd5e1] text-slate-800'}`}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] text-[#94a3b8] mb-1 font-bold">الكلية التابع لها:</label>
                          <select
                            value={studentCollege}
                            onChange={(e) => setStudentCollege(e.target.value)}
                            className={`w-full rounded-lg px-3 py-1.5 text-xs border focus:outline-none ${theme === 'dark' ? 'bg-[#1e293b] border-[#334155] text-white' : 'bg-white border-[#cbd5e1] text-slate-800'}`}
                          >
                            <option value="college1">{translations[lang].college1}</option>
                            <option value="college2">{translations[lang].college2}</option>
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={() => setShowCertificate(true)}
                        disabled={!studentName.trim()}
                        className="w-full mt-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 disabled:opacity-50 py-2 text-xs font-bold text-white shadow hover:from-amber-600 hover:to-amber-700 transition-all cursor-pointer"
                      >
                        {t.downloadCertificate}
                      </button>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* 3. Integration Results Table */}
            <div className={`p-5 rounded-2xl border shadow-md transition-all ${theme === 'dark' ? 'bg-[#151c2c] border-[#1e293b]' : 'bg-white border-[#cbd5e1]'}`}>
              <div className="mb-4 flex items-center justify-between border-b pb-3 border-[#334155]/30">
                <span className="font-bold text-sm">{t.resultsTitle}</span>
                <span className="text-xs text-slate-400 font-mono">Column: 30m × 0.25mm × 0.25µm</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-right leading-relaxed">
                  <thead>
                    <tr className={`border-b text-[#94a3b8] font-bold ${theme === 'dark' ? 'border-[#334155]' : 'border-[#cbd5e1]'}`}>
                      <th className="pb-2 text-right">{t.compound}</th>
                      <th className="pb-2 text-center">{t.formula}</th>
                      <th className="pb-2 text-center">{t.boilingPoint}</th>
                      <th className="pb-2 text-center">{t.polarity}</th>
                      <th className="pb-2 text-center">{t.retentionTime}</th>
                      <th className="pb-2 text-center">{t.peakHeight}</th>
                      <th className="pb-2 text-center">{t.peakArea}</th>
                      <th className="pb-2 text-center">{t.resolution}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#334155]/20">
                    {simulatedElution.map((peak, idx) => {
                      const peakTimeSec = peak.retentionTime * 60;
                      const hasEluted = currentTime >= peakTimeSec;
                      const hasResponse = peak.height > 0;
                      
                      return (
                        <tr 
                          key={peak.compound.id} 
                          className={`hover:bg-slate-500/5 transition-all ${hasEluted ? 'opacity-100' : 'opacity-40'} ${!hasResponse && hasEluted ? 'bg-red-500/5' : ''}`}
                        >
                          <td className="py-2.5 font-bold text-right">
                            {peak.compound.name[lang]}
                            {!hasResponse && hasEluted && (
                              <span className="block text-[10px] text-red-400 font-normal">
                                (لا يستجيب لهذا الكاشف)
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 text-center font-mono text-[#94a3b8]">{peak.compound.formula}</td>
                          <td className="py-2.5 text-center font-mono">{peak.compound.boilingPoint}°C</td>
                          <td className="py-2.5 text-center font-mono">{peak.compound.polarity.toFixed(2)}</td>
                          <td className="py-2.5 text-center font-mono font-bold text-emerald-500">
                            {hasEluted ? peak.retentionTime.toFixed(3) : '...'}
                          </td>
                          <td className="py-2.5 text-center font-mono text-blue-400">
                            {hasEluted && hasResponse ? Math.round(peak.height) : '0'}
                          </td>
                          <td className="py-2.5 text-center font-mono text-amber-500">
                            {hasEluted && hasResponse ? Math.round(peak.area) : '0'}
                          </td>
                          <td className="py-2.5 text-center font-mono font-bold">
                            {hasEluted && idx > 0 ? (
                              <span className={peak.resolution >= 1.5 ? 'text-emerald-500' : 'text-amber-500'}>
                                {peak.resolution}
                              </span>
                            ) : '-'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Historical Runs & Side-by-Side Graphical Overlay Comparison */}
            <div className={`p-5 rounded-2xl border shadow-md transition-all ${theme === 'dark' ? 'bg-[#151c2c] border-[#1e293b]' : 'bg-white border-[#cbd5e1]'}`}>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-4 border-b pb-3 border-[#334155]/30">
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-500" />
                  <span className="font-bold text-sm">{t.logTitle}</span>
                </div>
                {savedRuns.length > 0 && (
                  <button
                    onClick={handleClearLog}
                    className="flex items-center gap-1 rounded px-2.5 py-1 text-xs text-red-400 hover:bg-red-500/10 font-bold transition-all"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>{t.clearLog}</span>
                  </button>
                )}
              </div>

              {savedRuns.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-500 font-medium">
                  {t.noRunsYet}
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Select runs for comparison */}
                  <div className={`p-4 rounded-xl border ${theme === 'dark' ? 'bg-[#0f172a] border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="mb-3 text-xs font-bold text-amber-500 flex items-center justify-between">
                      <span>{t.selectCompare}</span>
                      <button
                        onClick={() => setShowCompareMode(prev => !prev)}
                        disabled={comparisonRuns.length < 2}
                        className={`rounded-lg px-3 py-1 text-[11px] font-bold shadow-sm transition-all cursor-pointer ${showCompareMode ? 'bg-rose-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50'}`}
                      >
                        {showCompareMode ? t.backToSingle : t.compareRuns}
                      </button>
                    </div>

                    <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
                      {savedRuns.map((run) => (
                        <label 
                          key={run.id} 
                          className={`flex items-center justify-between p-2 rounded-lg border text-xs cursor-pointer hover:bg-slate-500/15 transition-all ${theme === 'dark' ? 'border-[#334155]/50' : 'border-[#cbd5e1]'}`}
                        >
                          <div className="flex items-center gap-2.5">
                            <input
                              type="checkbox"
                              checked={comparisonRuns.includes(run.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  // Limit to 2 comparison selections
                                  if (comparisonRuns.length < 2) {
                                    setComparisonRuns(prev => [...prev, run.id]);
                                  } else {
                                    setComparisonRuns(prev => [prev[1], run.id]);
                                  }
                                } else {
                                  setComparisonRuns(prev => prev.filter(id => id !== run.id));
                                }
                              }}
                              className="accent-blue-500 h-3.5 w-3.5 rounded"
                            />
                            <div>
                              <p className="font-bold">{run.name}</p>
                              <p className="text-[10px] text-slate-400">
                                {run.date} | Oven: {run.ovenMode} | Flow: {run.flowRate} mL/min | Gas: {run.carrierGas}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-2 text-[10px] font-mono text-[#94a3b8]">
                            {run.elutionTimes.map((p, idx) => (
                              <span key={idx}>tR{idx+1}:{p.rt.toFixed(1)}m</span>
                            ))}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* COMPARISON OVERLAY GRAPH PANEL */}
                  {showCompareMode && (
                    <div className="border rounded-xl overflow-hidden border-[#334155]/40 p-4 bg-[#0a0f1d] space-y-3">
                      <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                        <Activity className="h-4 w-4" />
                        <span>{t.sideBySideCompare}</span>
                      </h4>
                      <canvas 
                        ref={compareCanvasRef} 
                        width={700} 
                        height={240} 
                        className="w-full h-auto block rounded-lg"
                      />
                    </div>
                  )}

                </div>
              )}
            </div>

          </section>

        </div>

      </main>

      {/* ================= USER GUIDE OVERLAY (DIAGNOSTIC/EDUCATION) ================= */}
      {showGuide && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className={`w-full max-w-4xl rounded-2xl border p-6 md:p-8 space-y-6 ${theme === 'dark' ? 'bg-[#151c2c] border-slate-700' : 'bg-white border-[#cbd5e1]'}`}>
            
            <div className="flex items-center justify-between border-b pb-4 border-[#334155]/30">
              <h2 className="text-lg font-extrabold text-emerald-400 flex items-center gap-2">
                <HelpCircle className="h-6 w-6" />
                <span>{t.guideTitle}</span>
              </h2>
              <button 
                onClick={() => setShowGuide(false)}
                className="text-slate-400 hover:text-white font-extrabold text-lg bg-[#1e293b] w-8 h-8 rounded-full flex items-center justify-center"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs max-h-[60vh] overflow-y-auto pr-2 leading-relaxed">
              
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-500/5 space-y-1.5">
                  <h3 className="font-extrabold text-blue-400 flex items-center gap-1.5">
                    <Wind className="h-4 w-4" />
                    <span>{t.guideCarrierGas}</span>
                  </h3>
                  <p className="text-[#94a3b8]">{t.guideCarrierGasDesc}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-500/5 space-y-1.5">
                  <h3 className="font-extrabold text-emerald-400 flex items-center gap-1.5">
                    <Columns className="h-4 w-4" />
                    <span>{t.guideColumn}</span>
                  </h3>
                  <p className="text-[#94a3b8]">{t.guideColumnDesc}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-500/5 space-y-1.5">
                  <h3 className="font-extrabold text-amber-500 flex items-center gap-1.5">
                    <Thermometer className="h-4 w-4" />
                    <span>{t.guideOven}</span>
                  </h3>
                  <p className="text-[#94a3b8]">{t.guideOvenDesc}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-500/5 space-y-1.5">
                  <h3 className="font-extrabold text-purple-400 flex items-center gap-1.5">
                    <Flame className="h-4 w-4" />
                    <span>{t.guideDetector}</span>
                  </h3>
                  <p className="text-[#94a3b8]">{t.guideDetectorDesc}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-500/5 space-y-1.5">
                  <h3 className="font-extrabold text-rose-400 flex items-center gap-1.5">
                    <Database className="h-4 w-4" />
                    <span>{t.guideSamples}</span>
                  </h3>
                  <p className="text-[#94a3b8]">{t.guideSamplesDesc}</p>
                </div>
              </div>

            </div>

            <div className="border-t pt-4 border-[#334155]/30 flex justify-end">
              <button
                onClick={() => setShowGuide(false)}
                className="rounded-lg bg-emerald-600 hover:bg-emerald-700 px-5 py-2 text-xs font-bold text-white transition-all shadow"
              >
                حسناً، فهمت آلية العمل
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ================= COMPLETED EXAM / CERTIFICATE DIALOG (HIGH CONTRAST PRINT FRIENDLY) ================= */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-3xl space-y-4">
            
            {/* Controls */}
            <div className="flex justify-between items-center bg-slate-800 p-3 rounded-xl border border-slate-700 text-white">
              <span className="text-xs font-bold flex items-center gap-1.5">
                <Award className="h-4 w-4 text-amber-500" />
                <span>معاينة شهادة الطالب - جاهزة للطباعة</span>
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 px-3.5 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>طباعة الشهادة الآن</span>
                </button>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded-md text-xs font-medium"
                >
                  إغلاق المعاينة
                </button>
              </div>
            </div>

            {/* THE ACTUAL CERTIFICATE EMBEDDED SHEET */}
            <div 
              id="printable-certificate-card" 
              className="bg-white text-slate-800 p-8 md:p-14 rounded-md shadow-2xl relative border-[12px] border-double border-amber-600 overflow-hidden select-none printable-container"
              style={{ direction: 'rtl' }}
            >
              
              {/* Royal corner decoration frames */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-amber-600" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-amber-600" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-amber-600" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-amber-600" />

              <div className="text-center space-y-6 relative">
                
                {/* Headers */}
                <div className="flex justify-between items-center border-b pb-4 border-slate-200">
                  <div className="text-right text-xs space-y-1">
                    <p className="font-extrabold text-slate-950">{translations[lang].college1}</p>
                    <p className="font-bold text-slate-700">{translations[lang].college2}</p>
                    <p className="text-[10px] text-slate-500">جامعة البصرة - العراق</p>
                  </div>

                  {/* SVG Center Logo Emblem */}
                  <div className="h-20 w-20 flex items-center justify-center">
                    <AssociationLogo className="h-full w-full" />
                  </div>

                  <div className="text-left text-xs space-y-1">
                    <p className="font-extrabold text-amber-700">جمهورية العراق</p>
                    <p className="text-[10px] text-slate-600 font-mono">Basra, Iraq</p>
                    <p className="text-[10px] text-slate-400">ID: GC-{Date.now().toString().slice(-6)}</p>
                  </div>
                </div>

                {/* Main titles */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-wide font-serif">
                    {t.certificateTitle}
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-widest font-mono">
                    {t.certificateSubtitle}
                  </p>
                </div>

                {/* Certify statement */}
                <div className="space-y-4 py-4 text-center">
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed max-w-lg mx-auto">
                    {t.certificateCertify}
                  </p>
                  
                  {/* Named Box */}
                  <div className="border-b-2 border-slate-900 max-w-md mx-auto py-2">
                    <p className="text-xl md:text-2xl font-extrabold text-slate-950 font-sans tracking-wide">
                      {studentName || "المهندس الكيميائي الطموح"}
                    </p>
                  </div>
                  
                  <div className="text-[11px] text-slate-400 font-bold">
                    الكلية: <span className="text-slate-700 font-extrabold">{translations[lang][studentCollege as keyof Translation]}</span>
                  </div>
                </div>

                {/* Certificate descriptive body */}
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed max-w-2xl mx-auto text-center font-medium">
                  {t.certificateBody}
                </p>

                {/* Bottom section with signatures and date */}
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                  <div className="text-right space-y-1.5 text-xs">
                    <p className="text-slate-400">{t.certificateDate}</p>
                    <p className="font-bold text-slate-800">{new Date().toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-[10px] text-slate-400">التدريب الرقمي دون اتصال بالشبكة PWA</p>
                  </div>

                  <div className="text-left space-y-1 text-xs">
                    <p className="text-slate-400 font-medium">الجهة المصدرة المعتمدة:</p>
                    <p className="font-extrabold text-slate-900 text-xs leading-snug">{t.certificateSignature}</p>
                    <p className="text-[10px] text-amber-600 font-mono tracking-tight">{t.developer}</p>
                    {/* Simulated sign stamp SVG */}
                    <div className="pt-2 flex justify-end">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" className="h-10 opacity-70">
                        <path d="M10 20 Q 30 10 50 20 T 90 20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M20 15 Q 40 30 60 15 T 80 25" fill="none" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="50" cy="20" r="14" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="3,2" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      )}

      {/* Embedded CSS style for window printing of the certificate */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-certificate-card, #printable-certificate-card * {
            visibility: visible;
          }
          #printable-certificate-card {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            border: 15px double #b45309 !important;
            padding: 2.5rem !important;
            margin: 0 !important;
            box-shadow: none !important;
            background: white !important;
            color: black !important;
            page-break-after: avoid;
            page-break-inside: avoid;
          }
          .printable-container {
            display: block !important;
          }
        }
      `}</style>

    </div>
  );
}
