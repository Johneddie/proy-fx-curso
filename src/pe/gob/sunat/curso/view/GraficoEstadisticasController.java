package pe.gob.sunat.curso.view;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javafx.fxml.FXML;
import javafx.scene.chart.BarChart;
import javafx.scene.chart.XYChart;
import pe.gob.sunat.curso.model.Curso;

/**
 * 
 * @author John
 *
 */
public class GraficoEstadisticasController {
	@FXML 
	private BarChart<String, Integer> barra;
	
	@FXML
	private void initialize() {
		
	}
	
	public void cargarDatosEstadistico(List<Curso> lcursos) {
		//ciclos
		XYChart.Series<String, Integer> series = new XYChart.Series<String, Integer>();
		Map<Integer, Integer> mapCiclos = new HashMap<>();
		for (Curso c:lcursos) {
			Integer ciclo = c.getCiclo();
			Integer numCursos = mapCiclos.get(ciclo);
			if(numCursos == null) {
				mapCiclos.put(ciclo, 1);
			}else {
				mapCiclos.put(ciclo, ++numCursos);
			}
		}
		
		for (Map.Entry<Integer, Integer> entry : mapCiclos.entrySet()){
		    series.getData().add(new XYChart.Data<>("Ciclo " + entry.getKey(), entry.getValue()));
		}
		
		barra.getData().add(series);
	}

}
