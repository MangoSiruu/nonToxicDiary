package mangosiruu.nontoxicdiary.repository;

import mangosiruu.nontoxicdiary.entity.ToxicFood;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;

@Repository
public interface ToxicFoodRepository extends JpaRepository<ToxicFood, Long> {

    void deleteByDate(LocalDate date);
}
