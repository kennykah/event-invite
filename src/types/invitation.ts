export type CeremonyType = 'civil_religious' | 'traditional_dot';

export interface InvitationDraft {
  id?: string;
  created_at?: string;
  status: 'pending' | 'processing' | 'ready' | 'error';
  ceremony_type: CeremonyType;
  names: string;
  date: string;
  time: string;
  venue: string;
  guest_count: number;
  colors: string[];
  photos: string[];
  designs: DesignPreview[];
}

export interface DesignPreview {
  id: string;
  template_id: string;
  status: 'generating' | 'ready' | 'error';
  url?: string;
}

export interface TemplateMeta {
  id: string;
  name: string;
  style: string;
  use_case: CeremonyType[];
  description: string;
  file: string;
}
