"use client";
import { useState } from "react";
import { Button, Text, Flex } from "@once-ui-system/core";

export default function EmailPopupButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="secondary"
        size="s"
        onClick={() => setShowPopup(true)}
        className="px-4 py-2 rounded-full"
        aria-label="Tampilkan alamat email"
      >
        📧 Email
      </Button>

      {showPopup && (
        <div className="absolute top-full mt-2 bg-white text-black p-4 rounded-lg shadow-lg z-10 w-64">
          <Text>
            Kirim email ke:
            <strong className="block mt-1 select-all text-blue-600">
              razzaqyalifnala@gmail.com
            </strong>
          </Text>
          <Flex className="justify-end mt-2">
            <Button
              size="s"
              variant="tertiary"
              onClick={() => setShowPopup(false)}
            >
              Tutup
            </Button>
          </Flex>
        </div>
      )}
    </div>
  );
}
