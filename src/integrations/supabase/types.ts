export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      application_metrics: {
        Row: {
          applications_sent: number | null
          created_at: string | null
          date: string
          id: string
          interviews_scheduled: number | null
          offers_received: number | null
          rejections_received: number | null
          responses_received: number | null
          user_id: string
        }
        Insert: {
          applications_sent?: number | null
          created_at?: string | null
          date: string
          id?: string
          interviews_scheduled?: number | null
          offers_received?: number | null
          rejections_received?: number | null
          responses_received?: number | null
          user_id: string
        }
        Update: {
          applications_sent?: number | null
          created_at?: string | null
          date?: string
          id?: string
          interviews_scheduled?: number | null
          offers_received?: number | null
          rejections_received?: number | null
          responses_received?: number | null
          user_id?: string
        }
        Relationships: []
      }
      automation_sessions: {
        Row: {
          completed_at: string | null
          created_at: string | null
          id: string
          logs: Json | null
          progress: Json | null
          session_type: string
          status: string | null
          target_url: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          logs?: Json | null
          progress?: Json | null
          session_type: string
          status?: string | null
          target_url?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          id?: string
          logs?: Json | null
          progress?: Json | null
          session_type?: string
          status?: string | null
          target_url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      automation_settings: {
        Row: {
          auto_apply_enabled: boolean | null
          auto_follow_up_enabled: boolean | null
          companies_blacklist: string[] | null
          created_at: string | null
          follow_up_delay_days: number | null
          id: string
          is_active: boolean | null
          keywords_blacklist: string[] | null
          max_applications_per_day: number | null
          priority_threshold: Database["public"]["Enums"]["job_priority"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auto_apply_enabled?: boolean | null
          auto_follow_up_enabled?: boolean | null
          companies_blacklist?: string[] | null
          created_at?: string | null
          follow_up_delay_days?: number | null
          id?: string
          is_active?: boolean | null
          keywords_blacklist?: string[] | null
          max_applications_per_day?: number | null
          priority_threshold?:
            | Database["public"]["Enums"]["job_priority"]
            | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auto_apply_enabled?: boolean | null
          auto_follow_up_enabled?: boolean | null
          companies_blacklist?: string[] | null
          created_at?: string | null
          follow_up_delay_days?: number | null
          id?: string
          is_active?: boolean | null
          keywords_blacklist?: string[] | null
          max_applications_per_day?: number | null
          priority_threshold?:
            | Database["public"]["Enums"]["job_priority"]
            | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      content_templates: {
        Row: {
          created_at: string | null
          id: string
          is_default: boolean | null
          name: string
          template: string
          template_type: string | null
          type: string
          updated_at: string | null
          user_id: string
          variables: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          template: string
          template_type?: string | null
          type: string
          updated_at?: string | null
          user_id: string
          variables?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          template?: string
          template_type?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string
          variables?: Json | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          application_date: string | null
          application_method: string | null
          applied_at: string | null
          automated: boolean | null
          automation_logs: Json | null
          company_name: string | null
          contact_email: string | null
          contact_person: string | null
          cover_letter: string | null
          created_at: string | null
          follow_up_date: string | null
          form_data: Json | null
          id: string
          interview_scheduled_at: string | null
          job_listing_id: string | null
          next_action: string | null
          notes: string | null
          position_title: string | null
          response_received_at: string | null
          resume_version: string | null
          salary_offered: number | null
          status: Database["public"]["Enums"]["application_status"] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          application_date?: string | null
          application_method?: string | null
          applied_at?: string | null
          automated?: boolean | null
          automation_logs?: Json | null
          company_name?: string | null
          contact_email?: string | null
          contact_person?: string | null
          cover_letter?: string | null
          created_at?: string | null
          follow_up_date?: string | null
          form_data?: Json | null
          id?: string
          interview_scheduled_at?: string | null
          job_listing_id?: string | null
          next_action?: string | null
          notes?: string | null
          position_title?: string | null
          response_received_at?: string | null
          resume_version?: string | null
          salary_offered?: number | null
          status?: Database["public"]["Enums"]["application_status"] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          application_date?: string | null
          application_method?: string | null
          applied_at?: string | null
          automated?: boolean | null
          automation_logs?: Json | null
          company_name?: string | null
          contact_email?: string | null
          contact_person?: string | null
          cover_letter?: string | null
          created_at?: string | null
          follow_up_date?: string | null
          form_data?: Json | null
          id?: string
          interview_scheduled_at?: string | null
          job_listing_id?: string | null
          next_action?: string | null
          notes?: string | null
          position_title?: string | null
          response_received_at?: string | null
          resume_version?: string | null
          salary_offered?: number | null
          status?: Database["public"]["Enums"]["application_status"] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_listing_id_fkey"
            columns: ["job_listing_id"]
            isOneToOne: false
            referencedRelation: "job_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      job_listings: {
        Row: {
          application_url: string | null
          benefits: string | null
          company: string
          created_at: string | null
          description: string | null
          discovered_at: string | null
          employment_type: string | null
          experience_level: string | null
          expires_at: string | null
          external_id: string | null
          id: string
          location: string | null
          match_score: number | null
          priority: Database["public"]["Enums"]["job_priority"] | null
          remote_allowed: boolean | null
          requirements: string | null
          salary_max: number | null
          salary_min: number | null
          source_platform: string | null
          title: string
          user_id: string
        }
        Insert: {
          application_url?: string | null
          benefits?: string | null
          company: string
          created_at?: string | null
          description?: string | null
          discovered_at?: string | null
          employment_type?: string | null
          experience_level?: string | null
          expires_at?: string | null
          external_id?: string | null
          id?: string
          location?: string | null
          match_score?: number | null
          priority?: Database["public"]["Enums"]["job_priority"] | null
          remote_allowed?: boolean | null
          requirements?: string | null
          salary_max?: number | null
          salary_min?: number | null
          source_platform?: string | null
          title: string
          user_id: string
        }
        Update: {
          application_url?: string | null
          benefits?: string | null
          company?: string
          created_at?: string | null
          description?: string | null
          discovered_at?: string | null
          employment_type?: string | null
          experience_level?: string | null
          expires_at?: string | null
          external_id?: string | null
          id?: string
          location?: string | null
          match_score?: number | null
          priority?: Database["public"]["Enums"]["job_priority"] | null
          remote_allowed?: boolean | null
          requirements?: string | null
          salary_max?: number | null
          salary_min?: number | null
          source_platform?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      job_search_criteria: {
        Row: {
          companies: string[] | null
          created_at: string | null
          employment_type: string[] | null
          experience_level: string[] | null
          id: string
          is_active: boolean | null
          job_titles: string[] | null
          keywords: string[] | null
          locations: string[] | null
          name: string
          remote_only: boolean | null
          salary_max: number | null
          salary_min: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          companies?: string[] | null
          created_at?: string | null
          employment_type?: string[] | null
          experience_level?: string[] | null
          id?: string
          is_active?: boolean | null
          job_titles?: string[] | null
          keywords?: string[] | null
          locations?: string[] | null
          name: string
          remote_only?: boolean | null
          salary_max?: number | null
          salary_min?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          companies?: string[] | null
          created_at?: string | null
          employment_type?: string[] | null
          experience_level?: string[] | null
          id?: string
          is_active?: boolean | null
          job_titles?: string[] | null
          keywords?: string[] | null
          locations?: string[] | null
          name?: string
          remote_only?: boolean | null
          salary_max?: number | null
          salary_min?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          availability_date: string | null
          bio: string | null
          certifications: string[] | null
          cover_letter_template: string | null
          created_at: string | null
          current_company: string | null
          current_title: string | null
          education_level: string | null
          email: string | null
          experience_years: number | null
          full_name: string | null
          github_url: string | null
          id: string
          languages: string[] | null
          linkedin_url: string | null
          location: string | null
          notice_period_weeks: number | null
          phone: string | null
          portfolio_url: string | null
          preferred_locations: string[] | null
          preferred_salary_max: number | null
          preferred_salary_min: number | null
          remote_preference: boolean | null
          resume_file_path: string | null
          skills: string[] | null
          updated_at: string | null
          willing_to_relocate: boolean | null
          work_authorization: string | null
          years_experience: number | null
        }
        Insert: {
          availability_date?: string | null
          bio?: string | null
          certifications?: string[] | null
          cover_letter_template?: string | null
          created_at?: string | null
          current_company?: string | null
          current_title?: string | null
          education_level?: string | null
          email?: string | null
          experience_years?: number | null
          full_name?: string | null
          github_url?: string | null
          id: string
          languages?: string[] | null
          linkedin_url?: string | null
          location?: string | null
          notice_period_weeks?: number | null
          phone?: string | null
          portfolio_url?: string | null
          preferred_locations?: string[] | null
          preferred_salary_max?: number | null
          preferred_salary_min?: number | null
          remote_preference?: boolean | null
          resume_file_path?: string | null
          skills?: string[] | null
          updated_at?: string | null
          willing_to_relocate?: boolean | null
          work_authorization?: string | null
          years_experience?: number | null
        }
        Update: {
          availability_date?: string | null
          bio?: string | null
          certifications?: string[] | null
          cover_letter_template?: string | null
          created_at?: string | null
          current_company?: string | null
          current_title?: string | null
          education_level?: string | null
          email?: string | null
          experience_years?: number | null
          full_name?: string | null
          github_url?: string | null
          id?: string
          languages?: string[] | null
          linkedin_url?: string | null
          location?: string | null
          notice_period_weeks?: number | null
          phone?: string | null
          portfolio_url?: string | null
          preferred_locations?: string[] | null
          preferred_salary_max?: number | null
          preferred_salary_min?: number | null
          remote_preference?: boolean | null
          resume_file_path?: string | null
          skills?: string[] | null
          updated_at?: string | null
          willing_to_relocate?: boolean | null
          work_authorization?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      scraped_jobs_temp: {
        Row: {
          created_at: string | null
          id: string
          job_data: Json
          processed: boolean | null
          source_url: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          job_data: Json
          processed?: boolean | null
          source_url: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          job_data?: Json
          processed?: boolean | null
          source_url?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      application_status:
        | "pending"
        | "applied"
        | "interviewing"
        | "rejected"
        | "accepted"
        | "withdrawn"
      automation_status: "active" | "paused" | "stopped"
      job_priority: "low" | "medium" | "high" | "urgent"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      application_status: [
        "pending",
        "applied",
        "interviewing",
        "rejected",
        "accepted",
        "withdrawn",
      ],
      automation_status: ["active", "paused", "stopped"],
      job_priority: ["low", "medium", "high", "urgent"],
    },
  },
} as const
