import React from "react";
import { useNoteStore } from "../../stores/use-notes-store";
import { useThemeStore } from "../../stores/use-theme-store";
import { AnnouncementDialog } from "../announcements";
import { AttachmentDialog } from "../attachments";
import AuthModal from "../auth/auth-modal";
import { SessionExpired } from "../auth/session-expired";
import { Dialog } from "../dialog";
import { AddTopicDialog } from "../dialogs/add-topic";
import ResultDialog from "../dialogs/result";
import { VaultDialog } from "../dialogs/vault";
import ImagePreview from "../image-preview";
import MergeConflicts from "../merge-conflicts";
import PremiumDialog from "../premium";
import { Expiring } from "../premium/expiring";
import SheetProvider from "../sheet-provider";
import { AddNotebookSheet } from "../sheets/add-notebook";
import AddToNotebookSheet from "../sheets/add-to";
import ExportNotesSheet from "../sheets/export-notes";
import ManageTagsSheet from "../sheets/manage-tags";
import PublishNoteSheet from "../sheets/publish-note";
import RateAppSheet from "../sheets/rate-app";
import RecoveryKeySheet from "../sheets/recovery-key";
import RestoreDataSheet from "../sheets/restore-data";

const DialogProvider = () => {
  const colors = useThemeStore((state) => state.colors);
  const loading = useNoteStore((state) => state.loading);

  return (
    <>
      <Dialog context="global" />
      <AddTopicDialog colors={colors} />
      <AddNotebookSheet colors={colors} />
      <PremiumDialog colors={colors} />
      <AuthModal colors={colors} />
      <MergeConflicts />
      <ExportNotesSheet />
      <RecoveryKeySheet colors={colors} />
      <SheetProvider />
      <SheetProvider context="sync_progress" />
      <RestoreDataSheet />
      <ResultDialog />
      <VaultDialog colors={colors} />
      <AddToNotebookSheet colors={colors} />
      <RateAppSheet />
      <ImagePreview />
      <PublishNoteSheet />
      <ManageTagsSheet />
      <AttachmentDialog />
      {loading ? null : <Expiring />}
      <AnnouncementDialog />
      <SessionExpired />
    </>
  );
};

export default React.memo(DialogProvider, () => true);