import "./ActivitiesEditModal.css";

const ActivitiesEditModal = ({ isOpen, onClose, activityId }) => {
    if (!isOpen) {
        return null;
      }

  return (
    <div className="activitiesEditModal">
      <div className="activitiesEditModalContent">
        Aktivitets id: {activityId}
        <button className="activitiesEditModalCloseButton" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ActivitiesEditModal;
