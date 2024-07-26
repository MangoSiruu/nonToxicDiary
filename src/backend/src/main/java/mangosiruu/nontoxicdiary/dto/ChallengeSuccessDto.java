package mangosiruu.nontoxicdiary.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeSuccessDto {
    private LocalDate date;
    private boolean success;
}
