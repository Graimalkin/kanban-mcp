import { z } from "zod";

// Planka schemas
// NOTE: Planka's response shape evolves across versions. Schemas use
// .passthrough() and mark non-critical fields optional/nullable so newer
// Planka builds (which may omit or add fields) don't break parsing.

export const PlankaUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable().optional(),
  username: z.string().nullable().optional(),
  avatarUrl: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  background: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaBoardSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  name: z.string(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaListSchema = z.object({
  id: z.string(),
  boardId: z.string(),
  name: z.string(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaLabelSchema = z.object({
  id: z.string(),
  boardId: z.string(),
  name: z.string().nullable().optional(),
  color: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

// Define the stopwatch schema
export const PlankaStopwatchSchema = z.object({
  startedAt: z.string().nullable().optional(),
  total: z.number(),
}).passthrough();

export const PlankaCardSchema = z.object({
  id: z.string(),
  listId: z.string().nullable().optional(),
  name: z.string(),
  description: z.string().nullable().optional(),
  position: z.number().nullable().optional(),
  dueDate: z.string().nullable().optional(),
  isCompleted: z.boolean().optional(),
  stopwatch: PlankaStopwatchSchema.nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaTaskSchema = z.object({
  id: z.string(),
  cardId: z.string().nullable().optional(),
  name: z.string(),
  isCompleted: z.boolean(),
  position: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaCommentSchema = z.object({
  id: z.string(),
  cardId: z.string(),
  userId: z.string().nullable().optional(),
  text: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaAttachmentSchema = z.object({
  id: z.string(),
  cardId: z.string(),
  userId: z.string().nullable().optional(),
  name: z.string(),
  url: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaCardMembershipSchema = z.object({
  id: z.string(),
  cardId: z.string(),
  userId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaBoardMembershipSchema = z.object({
  id: z.string(),
  boardId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaProjectMembershipSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  userId: z.string(),
  role: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

export const PlankaCardLabelSchema = z.object({
  id: z.string(),
  cardId: z.string(),
  labelId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string().nullable().optional(),
}).passthrough();

// Type exports for Planka
export type PlankaUser = z.infer<typeof PlankaUserSchema>;
export type PlankaProject = z.infer<typeof PlankaProjectSchema>;
export type PlankaBoard = z.infer<typeof PlankaBoardSchema>;
export type PlankaList = z.infer<typeof PlankaListSchema>;
export type PlankaLabel = z.infer<typeof PlankaLabelSchema>;
export type PlankaCard = z.infer<typeof PlankaCardSchema>;
export type PlankaTask = z.infer<typeof PlankaTaskSchema>;
export type PlankaComment = z.infer<typeof PlankaCommentSchema>;
export type PlankaAttachment = z.infer<typeof PlankaAttachmentSchema>;
export type PlankaCardMembership = z.infer<typeof PlankaCardMembershipSchema>;
export type PlankaBoardMembership = z.infer<typeof PlankaBoardMembershipSchema>;
export type PlankaProjectMembership = z.infer<
  typeof PlankaProjectMembershipSchema
>;
export type PlankaCardLabel = z.infer<typeof PlankaCardLabelSchema>;
